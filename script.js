let winMsg = 'Victory!';
let loseMsg = 'Crushing defeat!';
let tieMsg = 'Tie!';
let moveList = ['rock', 'paper', 'scissors'];

let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

buttons[0].textContent = 'Rock';
buttons[1].textContent = 'Paper';
buttons[2].textContent = 'Scissors';
statusDisplay.textContent = 'Choose!';

function startGame(playerChoice) {
  let computerChoice = randomMove();

  moveDisplays[0].textContent = `Player: ${playerChoice}`;
  moveDisplays[1].textContent = `Computer: ${computerChoice}`;

  const result = calcResult(playerChoice, computerChoice);

  statusDisplay.textContent = result;

  if (result === winMsg || result === loseMsg || result === tieMsg) {
    buttons[0].style.display = 'none';
    buttons[1].style.display = 'none';
    buttons[2].textContent = 'Play again';
    buttons[2].addEventListener('click', resetGame);
  }
}

function calcResult(move1, move2) {
  if (move1 === move2) {
    return tieMsg;
  } else if (
    (move1 === moveList[0] && move2 === moveList[2]) ||
    (move1 === moveList[1] && move2 === moveList[0]) ||
    (move1 === moveList[2] && move2 === moveList[1])
  ) {
    return winMsg;
  } else {
    return loseMsg;
  }
}

function randomMove() {
  return moveList[Math.floor(Math.random() * moveList.length)];
}

function resetGame() {
  buttons[0].style.display = 'inline-block';
  buttons[1].style.display = 'inline-block';
  buttons[2].textContent = 'Scissors';
  buttons[2].removeEventListener('click', resetGame);
  statusDisplay.textContent = 'Choose!';
  moveDisplays[0].textContent = '';
  moveDisplays[1].textContent = '';
}

buttons[0].addEventListener('click', () => startGame(moveList[0]));
buttons[1].addEventListener('click', () => startGame(moveList[1]));
buttons[2].addEventListener('click', () => startGame(moveList[2]));
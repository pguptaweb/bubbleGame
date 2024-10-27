var timer = 60;
var score = 0;
var timerelem = document.querySelector("#timerelem");
var hitelem = document.querySelector("#hitelem");
var scoreelem = document.querySelector("#scoreelem");
var btmpnl = document.querySelector("#btmpnl");

var guessNumber;

setInterval(function () {
  if (timer > 0) {
    --timer;
    timerelem.textContent = timer;
  } else {
    btmpnl.innerHTML = '<h1 id="center">Game Over</h1>';
  }
}, 1000);

function makeBubbles() {
  for (var i = 0; i < 130; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    var template = `<div class="bubble">${randomNumber}</div>`;
    btmpnl.innerHTML += template;
  }
}

function getNewGuess() {
  // get a random number
  guessNumber = Math.floor(Math.random() * 10);
  // and then place the random number inside the game guess element
  hitelem.textContent = guessNumber;
}

btmpnl.addEventListener("click", function (details) {
  var clickedBblValue = details.target.textContent;
  if (clickedBblValue == guessNumber) {
    score = score + 10;
    scoreelem.textContent = score;
    getNewGuess();
    btmpnl.innerHTML = "";
    makeBubbles();
  } else {
    console.log("shi nhi hua");
  }
});

getNewGuess();
makeBubbles();

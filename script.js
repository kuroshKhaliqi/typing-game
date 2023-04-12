let arrayOfWords = [
  "hello",
  "goodbye",
  "morning",
  "evening",
  "night",
  "cool",
  "weird",
  "super",
  "duper",
  "weird",
  "right",
  "school",
  "programming",
  "seven",
  "burger",
  "negative",
  "math",
  "javascript",
];
let level;
let points;
let time;
let timerId;
let displaedWord;
let wordElement = document.getElementById("word");
let pointsElement = document.getElementById("points");
let popUpElement = document.getElementById("pop-up-container");
popUpElement.addEventListener("click", startGame);
let popUpBgElement = document.getElementById("pop-up-bg");
let timerBarElement = document.getElementById("timer-bar");
let timerElement = document.getElementById("timer");
let timerLabelElement = document.getElementById("timer-label");

function startGame(event) {
  popUpBgElement.style.display = "none";
  let buttonElement = event.target;
  level = buttonElement.id;
  if (level == "easy") {
    points = 0;
    hideTimer();
  }
  if (level === "medium") {
    points = 500;
    hideTimer();
  }
  if (level === "hard") {
    points = 300;
    hideTimer();
  }
  if (level === "impossible") {
    points = 100;

    time = 10;
    showTimer();
    timerId = setInterval(decrease1Second, 1000);
    // timerBarId = setInterval(showTimerBar, 100);
  }
  displayNewWord();
}

function generateWord() {
  let randomIndex = Math.floor(Math.random() * 10);
  let randomWord = arrayOfWords[randomIndex];
  return randomWord;
}
function showTimer() {
  timerElement.style.display = "flex";
  timerLabelElement.style.display = "block";
  timerBarElement.style.width = (time / 5) * 100 + "%";
  timerLabelElement.innerText = time;
}
function hideTimer() {
  timerElement.style.display = "none";
  timerLabelElement.style.display = "none";
}
function displayNewWord() {
  displaedWord = generateWord();
  //   console.log(displaedWord);
  wordElement.innerText = displaedWord;
  pointsElement.innerText = points;

  //IF POINTs are equal to  10 ALERT THE USER AND RESTART THE GAME BY SETTING THE POINTs TO 0
}
let userWordElement = document.getElementById("userword");
userWordElement.addEventListener("keyup", checkTheWord);
function checkTheWord() {
  let userword = userWordElement.value;
  if (level === "easy") {
    if (userword === displaedWord) {
      userWordElement.value = "";
      points += 100;
      if (points === 1000) {
        points = 0;
        alert("YOU WON THIS LEVEL!!!!!");
        restartGame();
      }
      displayNewWord();
    }
  } else if (level === "medium") {
    if (userword === displaedWord) {
      userWordElement.value = "";
      points += 100;
      if (points === 1000) {
        points = 0;
        alert("YOU WON THIS LEVEL!!!!!");
        restartGame();
      }
      displayNewWord();
    } else if (userword.length === displaedWord.length) {
      points -= 100;
      pointsElement.innerText = points;
      if (points === 0) {
        points = 0;
        alert("YOU LOOSE THIS LEVEL!!!!!");
        restartGame();
      }
    }
  } else if (level === "hard") {
    if (userword === displaedWord) {
      userWordElement.value = "";
      points += 100;
      if (points === 1000) {
        points = 0;
        alert("YOU WON THIS LEVEL!!!!!");
        restartGame();
      }
      displayNewWord();
    } else if (!displaedWord.startsWith(userword)) {
      points -= 100;
      pointsElement.innerText = points;
      if (points === 0) {
        points = 0;
        alert("YOU LOOSE THIS LEVEL!!!!!");
        restartGame();
      }
    }
  } else if ((level = "impossible")) {
    if (userword === displaedWord) {
      userWordElement.value = "";
      points += 100;
      time += 2;
      showTheTime;
      if (points === 1000) {
        points = 0;
        alert("YOU WON THIS LEVEL!!!!!");
        restartGame();
      }
      displayNewWord();
    } else if (!displaedWord.startsWith(userword)) {
      points -= 100;
      pointsElement.innerText = points;
      if (points === 0) {
        points = 0;
        alert("YOU LOOSE THIS LEVEL!!!!!");
        clearInterval(timerId);
        restartGame();
      }
    }
  }
}

function restartGame() {
  popUpBgElement.style.display = "flex";
  userWordElement.value = "";
}

function decrease1Second() {
  time--;
  if (time === 0) {
    points = 0;
    alert("YOU LOOSE THIS LEVEL!!!!!");
    clearInterval(timerId);
    restartGame();
    return;
  }
  showTheTime();
}
function showTheTime() {
  timerLabelElement.innerText = time;
  timerBarElement.style.width = (time * 100) / 10 + "%";
}

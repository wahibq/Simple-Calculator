let numbersEl = document.querySelectorAll(".numbers");
let arithmeticOperatorsEl = document.querySelectorAll(".arithmetic-operators");
let equalBtnEl = document.querySelector(".equal-btn");
let resultDisplayEl = document.querySelector("#result-display");
let firstEntries = "";
let secondEntries = "";
let arithmeticOperators = "";
function renderResult() {
  return (resultDisplayEl.value = `${firstEntries} ${arithmeticOperators} ${secondEntries}`);
}
numbersEl.forEach((element) => {
  element.addEventListener("click", entries);
});

function entries(e) {
  if (firstEntries && arithmeticOperators) {
    secondEntries += e.target.textContent;
    let convertedInNum = parseInt(secondEntries);
    secondEntries = convertedInNum;
  } else {
    firstEntries += e.target.textContent;
    let convertedInNum = parseInt(firstEntries);
    firstEntries = convertedInNum;
  }
  renderResult();
}

arithmeticOperatorsEl.forEach((element) => {
  element.addEventListener("click", (e) => {
    arithmeticOperators = e.target.textContent;
    renderResult();
  });
});

equalBtnEl.addEventListener("click", evaluator);
function evaluator() {
  if (firstEntries && secondEntries && arithmeticOperators) {
    let result;
    switch (arithmeticOperators) {
        case "X":
          result = firstEntries * secondEntries;
          break;
        case "/":
          result = firstEntries / secondEntries;
          break;
        case "-":
          result = firstEntries - secondEntries;
          break;
        case "+":
          result = firstEntries + secondEntries;
      }
    firstEntries = "";
    secondEntries = "";
    arithmeticOperators = "";
    return resultDisplayEl.value = result.toPrecision(4);
  }
}


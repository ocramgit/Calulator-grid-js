const valueBtn = document.getElementsByClassName("buttonValue");
const number = document.getElementById("number");

let numberResult = "";

for (let i = 0; i < valueBtn.length; i++) {
  valueBtn[i].addEventListener("click", () => {
    if (valueBtn[i].textContent == "=") number.textContent = eval(numberResult);
    number.textContent += valueBtn[i].textContent;
    numberResult += valueBtn[i].textContent;
  });
}

document.getElementById("clear").addEventListener("click", (event) => {
  number.textContent = "";
  numberResult = "";
  console.log("clicked");
});

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "c") {
    number.textContent = "";
    numberResult = "";
    console.log("C key pressed");
  }
});

document.getElementById("clear").addEventListener("click", (event) => {
  number.textContent = "";
  numberResult = "";
  console.log("clicked");
});

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "backspace") {
    number.textContent = eval(numberResult);
  }
});

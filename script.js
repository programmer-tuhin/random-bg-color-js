document.body.style.background = "#9A1663";

//Using normal function
// function changeColor() {
//   document.body.style.backgroundColor = `rgb(${Math.round(
//     Math.random() * 255
//   )}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
// }

//Using Arrow function
const changeColor = () => {
  let bgColorCodeNum = Math.round(Math.random() * 245);
  console.log(bgColorCodeNum);
  let bgColorCode = `rgb(${bgColorCodeNum}, ${bgColorCodeNum + 10}, ${
    bgColorCodeNum - 10
  })`;
  console.log(bgColorCode);
  let btn = document.getElementById("btn");
  if (bgColorCodeNum > 200) {
    document.body.style.backgroundColor = `${bgColorCode}`;
    btn.style.color = "black";
  } else {
    btn.style.color = "white";
    document.body.style.backgroundColor = `${bgColorCode}`;
  }
};

// var toggleButton = document.getElementById("toggleButton");
// var lightImage = document.querySelector(".light2");

// toggleButton.addEventListener("click", function () {
//   lightImage.style.display =
//     lightImage.style.display === "none" ? "block" : "none";
// });

// var toggleButton = document.getElementById("toggleButton");
// var lights = document.querySelectorAll(".light, .light2");

// toggleButton.addEventListener("click", function () {
//   lights.forEach(function (light) {
//     light.classList.toggle("light");
//     light.classList.toggle("light2");
//   });
// });

var toggleButton = document.getElementById("toggleButton");
var lights = document.querySelectorAll(".light, .light2");

toggleButton.addEventListener("click", function () {
  lights.forEach(function (light) {
    // light.classList.toggle("light");
    // light.classList.toggle("light2");

    if (light.classList.contains("light")) {
      light.classList.toggle("light2");
    } else {
      light.classList.toggle("light");
    }
  });
});

var acButton = document.getElementById("ac");
var acImages = document.querySelectorAll(".ac-air, .ac-air2");

acButton.addEventListener("click", function () {
  acImages.forEach(function (image) {
    if (image.classList.contains("ac-air")) {
      image.classList.toggle("ac-air2");
    } else {
      image.classList.toggle("ac-air");
    }
  });
});

// bg
// const colorPicker = document.getElementById("colorPicker");
// const changeColorDiv = document.getElementById("changeColorDiv");

// colorPicker.addEventListener("change", function (event) {
//   const selectedColor = event.target.value;
//   changeColorDiv.style.backgroundColor = selectedColor;
// });

const colorRange = document.getElementById("colorRange");
const changeColorDiv = document.getElementById("changeColorDiv");

colorRange.addEventListener("input", function (event) {
  const selectedValue = event.target.value;
  const color = getColorFromRange(selectedValue);
  changeColorDiv.style.backgroundColor = color;
});

function getColorFromRange(value) {
  const hue = Math.floor((value / 100) * 360);
  return `hsl(${hue}, 100%, 50%)`;
}

// intensity
const ceilingBulb = document.getElementById("ceilingBulb");
const increaseShadowBtn = document.getElementById("increaseShadowBtn");
const decreaseShadowBtn = document.getElementById("decreaseShadowBtn");

let shadowIntensity = 0.5;

increaseShadowBtn.addEventListener("click", function () {
  if (shadowIntensity < 1) {
    shadowIntensity += 0.1;
    updateShadowIntensity();
  }
});

decreaseShadowBtn.addEventListener("click", function () {
  if (shadowIntensity > 0) {
    shadowIntensity -= 0.1;
    updateShadowIntensity();
  }
});

function updateShadowIntensity() {
  const shadowValue = `0 0 10px rgba(0, 0, 0, ${shadowIntensity})`;
  ceilingBulb.style.boxShadow = shadowValue;
}

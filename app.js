// first selct the element in the html by creating a variable

const button = document.querySelector("button");
button.addEventListener("click", handleClick);

function handleClick() {
  const image = document.querySelector("#image");
  image.classList.toggle("hidden");
}

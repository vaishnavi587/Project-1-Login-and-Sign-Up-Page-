const loginButton = document.querySelector(".open-popup");
const loginPopup = document.getElementById("login-popup");

loginButton.addEventListener("click", () => {
  loginPopup.style.display = "block"; // Instantly display the popup
});


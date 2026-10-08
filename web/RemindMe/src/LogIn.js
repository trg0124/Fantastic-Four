const login = document.getElementById("LogIn");
const message = document.getElementById("message");

login.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    message.textContent = "Logging in...";
});

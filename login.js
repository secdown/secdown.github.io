const loginBtn = document.getElementById("loginBtn");
const cancelBtn = document.getElementById("cancelBtn");

loginBtn.addEventListener("click", login);
cancelBtn.addEventListener("click", resetFields);

async function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const error =
        document.getElementById("error");

    error.textContent = "";

    try {

        const response = await fetch("users.txt");

        const text = await response.text();

        const users = text.split("\n");

        let valid = false;

        users.forEach(user => {

            const [u, p] =
                user.trim().split(":");

            if (
                username === u &&
                password === p
            ) {
                valid = true;
            }

        });

        if (valid) {

            window.location.href =
                "loading.html";

        } else {

            error.textContent =
                "Invalid username or password.";

        }

    } catch (err) {

        error.textContent =
            "Could not load users.txt";

    }

}

function resetFields() {

    document.getElementById("username").value = "";

    document.getElementById("password").value = "";

}

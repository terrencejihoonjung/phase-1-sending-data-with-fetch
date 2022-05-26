function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(response => response.json())
        .then(data => {
            const header = document.createElement("h1");
            header.textContent = data.id;
            document.querySelector("body").append(header);
        })
        .catch(error => {
            const errorMessage = document.createElement("p");
            errorMessage.textContent = error.messsage;
            document.querySelector("body").append(error);
        })

}
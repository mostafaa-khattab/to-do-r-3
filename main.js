let userInput = document.getElementById("userInput")
let homeContent = document.getElementById("homeContent")


let items = []
displayItem()

function addItem() {

    let rgx = /^[A-Z][a-z]{1,}/

    if (rgx.test(userInput.value)) {

        items.push(userInput.value)
        displayItem()
        userInput.value = ""

    } else {
        window.alert("Please enter a valid username")
    }

}

function displayItem() {
    let cartona = ``

    items.forEach((item, ind) => {
        cartona += `<div
          class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
          <p id="item" class="m-0 p-0">${item}</p>
          <i class="fa-sharp fa-solid fa-trash" onClick="deleteItems(${ind})" ></i>
        </div>`
    })

    homeContent.innerHTML = cartona
}

function deleteItems(index) {
    items.splice(index, 1)
    displayItem()
}
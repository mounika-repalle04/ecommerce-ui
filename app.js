// Spring Boot backend URL (Render)
const BASE_URL = "https://e-commerce-restapi-project02-3.onrender.com/api/items";

// Add item
function addItem() {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;

    if (!name || !description || !price) {
        alert("Please fill all fields");
        return;
    }

    const item = {
        name: name,
        description: description,
        price: price
    };

    fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(() => {
        alert("Item added successfully");
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("price").value = "";
        getAllItems();
    })
    .catch(err => {
        console.error(err);
        alert("Error adding item");
    });
}

// Get all items
function getAllItems() {
    fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("itemsTable");
            table.innerHTML = "";

            data.forEach(item => {
                table.innerHTML += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.description}</td>
                        <td>${item.price}</td>
                    </tr>
                `;
            });
        })
        .catch(err => {
            console.error(err);
            alert("Failed to load items");
        });

        

}
// window.onload = function () {
//     getAllItems();
// };

window.onload = getAllItems;

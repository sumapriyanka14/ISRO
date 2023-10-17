const search = document.getElementById("search");
const city = document.getElementById("city");
const state = document.getElementById("state");
const center = document.getElementById("centre");
const display = document.getElementById("display");

let result;

async function places() {
  try {
    const response = await fetch("https://isro.vercel.app/api/centres");
    result = await response.json();
    console.log(result);
    show(result);
  } catch (err) {
    console.log(err);
  }
}
places();

search.addEventListener("input", (event) => {
  return event.target.value;
});

city.addEventListener("click", () => {
  const table = document.createElement("table");

  table.innerHTML = `<tr>
      <th>S.no</th>
      <th>Center Name</th>
      <th>City</th>
      <th>State</th>
    </tr>`;

  for (const centre of result.centres) {
    if (search.value == centre.Place) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${centre.id}</td>
        <td>${centre.name}</td>
        <td>${centre.Place}</td>
        <td>${centre.State}</td>
      `;

      table.appendChild(row);
    }
  }

  display.innerHTML = "";
  display.appendChild(table);
});

center.addEventListener("click", () => {
  const table = document.createElement("table");

  table.innerHTML = `<tr>
      <th>S.no</th>
      <th>Center Name</th>
      <th>City</th>
      <th>State</th>
    </tr>`;

  for (const centre of result.centres) {
    if (search.value == centre.name) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${centre.id}</td>
        <td>${centre.name}</td>
        <td>${centre.Place}</td>
        <td>${centre.State}</td>
      `;

      table.appendChild(row);
    }
  }

  display.innerHTML = "";
  display.appendChild(table);
});

state.addEventListener("click", () => {
  const table = document.createElement("table");

  table.innerHTML = `<tr>
      <th>S.no</th>
      <th>Center Name</th>
      <th>City</th>
      <th>State</th>
    </tr>`;

  for (const centre of result.centres) {
    if (search.value == centre.State) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${centre.id}</td>
        <td>${centre.name}</td>
        <td>${centre.Place}</td>
        <td>${centre.State}</td>
      `;

      table.appendChild(row);
    }
  }

  display.innerHTML = "";
  display.appendChild(table);
});

function show(data) {
  let tableRow = `<tr>
    <th>S.no</th>
    <th>Center Name</th>
    <th>City</th>
    <th>State</th>
  </tr>`;

  for (let eachRow of data.centres) {
    tableRow += `<tr>
                        <td class = "tableRow-data">${eachRow.id} </td>
                        <td>${eachRow.name} </td>
                        <td>${eachRow.Place}</td>
                        <td>${eachRow.State}</td>
                      </tr>`;
  }

  document.getElementById("table-body").innerHTML = tableRow;
}

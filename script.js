const stdsdata = [];
let rowCount = 0;

const add = () => {
    rowCount++;
    const name = document.getElementsByClassName("input1")[0].value;
    const email = document.getElementsByClassName("input2")[0].value;
    const Phne = document.getElementsByClassName("input3")[0].value;
    const rollNo = document.getElementsByClassName("input4")[0].value;

if(!name || !email || !Phne || !rollNo){
    alert("Please fill all fields");
    return;
}

// const stds = [
//     name, 
//     email,
//     Phne,
//     rollNo
// ];


const tablebody = document.querySelector('table tbody');

const newRow = document.createElement('tr');

newRow.id = `row-${rowCount}`;
newRow.className = `new-row`;


    newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${Phne}</td>
    <td>${rollNo}</td>
    <i class="fa-solid fa-trash" onclick="dltRow('${newRow.id}')"></i>
    `;

    tablebody.appendChild(newRow);

    document.getElementsByClassName("input1")[0].value = '';
    document.getElementsByClassName("input2")[0].value = '';
    document.getElementsByClassName("input3")[0].value = '';
    document.getElementsByClassName("input4")[0].value = '';


};

const dltAllRows = () => {
    row = document.querySelectorAll('.new-row');
    row.forEach(row => row.remove());
};


const dltRow = (rowId) => {
    const row = document.getElementById(rowId);
    if(row){
        row.remove();
    }
}
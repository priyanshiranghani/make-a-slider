const records = [
    {
        id : 1,
        name : "ashish",
        email : "ashu@gmail.com",
        phone : "1121212",
        city : "surat",
        salary : 20000,
        degi : "senior",
        dep : "programming",
    },
    {
        id : 2,
        name : "hari",
        email : "hari@gmail.com",
        phone : "5454545",
        city : "surat",
        salary : 22000,
        degi : "junior",
        dep : "ui/ux",
    },
    {
        id : 3,
        name : "raj",
        email : "raj@gmail.com",
        phone : "454545",
        city : "vadodara",
        salary : 25000,
        degi : "junior",
        dep : "bde",
    },
    {
        id : 4,
        name : "deep",
        email : "deep@gmail.com",
        phone : "565656",
        city : "vapi",
        salary : 30000,
        degi : "tl",
        dep : "webdesign",
    },
    {
        id : 5,
        name : "jay",
        email : "jay@gmail.com",
        phone : "5565656",
        city : "rajkot",
        salary : 20000,
        degi : "senior",
        dep : "programming",
    },
    {
        id : 6,
        name : "ajay",
        email : "ajay@gmail.com",
        phone : "5565656",
        city : "vapi",
        salary : 25000,
        degi : "manager",
        dep : "ui/ux",
    },
];

function renderTable(filteredRecords) {
    const tableBody = document.getElementById('allRecord');
    tableBody.innerHTML = '';


    const viewRecord = () => {

        let tbl = "";
        let sum = 0;

        records.map((val, index) => {
            sum = sum + val.salary * val.qty;
            tbl += `
        <tr>
            <td>${val.id}</td>
            <td>${val.name}</td>
            <td>${val.email}</td>
            <td>${val.phone}</td>
            <td>${val.city}</td>
            <td>${val.salary}</td>
            <td>${val.degi}</td>
            <td>${val.dep}</td>
        `
        })
        document.getElementById('allRecord').innerHTML = tbl;
        document.getElementById('totalSalary').innerHTML = `Total = ${sum}`
    };
    viewRecord();

    viewRecord(filteredRecords);
}


function filterRecords() {
    const city = document.getElementById('city').value;
    const salary = parseInt(document.getElementById('salary').value) || 0;
    const department = document.getElementById('department').value;
    const designation = document.getElementById('designation').value;

    const filteredRecords = records.filter(record => {
        return (city === '' || record.city === city) &&
            (salary === 0 || record.salary >= salary) &&
            (department === '' || record.dep === department) &&
            (designation === '' || record.degi === designation);
    });
    renderTable(filteredRecords);
}

document.getElementById('city').addEventListener('change', filterRecords);
document.getElementById('salary').addEventListener('input', filterRecords);
document.getElementById('department').addEventListener('change', filterRecords);
document.getElementById('designation').addEventListener('change', filterRecords);

renderTable(records);


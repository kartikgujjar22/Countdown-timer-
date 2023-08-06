// // const endDate = "05 August 2023 00:00 AM"

// function parseDateTimeInput(datetimeInput) {
//     const dateTimeParts = datetimeInput.split("T");
//     const dateParts = dateTimeParts[0].split("-");
//     const timeParts = dateTimeParts[1].split(":");
//     const year = parseInt(dateParts[0]);
//     const month = parseInt(dateParts[1]) - 1; // Month is 0-indexed in JavaScript Date
//     const day = parseInt(dateParts[2]);
//     const hours = parseInt(timeParts[0]);
//     const minutes = parseInt(timeParts[1]);
//     return new Date(year, month, day, hours, minutes);
// }

// function handleDateTime() {
//     const datetimeInput = document.getElementById("datetimeInput").value;
//     let endDate = new Date(datetimeInput)
//     document.getElementById("end-date").innerHTML = endDate;
//     console.log("this is inside the function" + endDate)
//     return endDate;
// }

// const endDate = handleDateTime();

const endDate = "08 August 2023 09:00 AM"

document.getElementById("end-date").innerHTML = endDate;

const clock = () => {

    const end = new Date(endDate)
    const now = new Date()

    document.getElementById("time").innerHTML = now

    console.log(endDate)
    console.log(now)

    const diff = (end - now) / 1000
    console.log(diff)

    if (diff < 0) return;

    // we have to get days here
    let days = Math.floor(diff / 3600 / 24)
    console.log(days)
    const dys = document.getElementById("dys").innerHTML = days

    // we have to get hrs here
    const hrs = Math.floor(diff / 3600) % 24
    console.log(hrs)
    document.getElementById("hours").innerHTML = hrs

    // we have to get minutes here
    const min = Math.floor(diff / 60) % 60
    console.log(min)
    document.getElementById("minutes").innerHTML = min

    // we have to get seconds here
    const sec = Math.floor(diff) % 60
    console.log(sec)
    document.getElementById("seconds").innerHTML = sec

}
setInterval(
    () => {
        clock()
    }, 1000
)

let headline = document.getElementById('headline');
// console.log(headline);

function changeHeadline() {
    // console.log("changeHeadline")
    headline.classList.add('headline');
}

function resetHeadline() {
    console.log("resetHeadline");
    headline.classList.remove('headline')
}
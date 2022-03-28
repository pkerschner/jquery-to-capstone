
$().ready(() => {

    $("#refresh").on("click", () => {
        refresh();
    });

    refresh();

});

const refresh = () => {    
    $.getJSON("http://localhost:65298/api/users/3")
        .then((res) => {
            console.debug(res);
            display(res);
        })
        .fail((err) => {
            console.error(err);
        });
}

const display = (user) => {
    $("#dId").text(user.id);
    $("#dName").text(`${user.firstname} ${user.lastname}`);
    $("#dUsername").text(user.username);
    $("#dPhone").text(user.phone);
    $("#dEmail").text(user.email);
    $("#dReviewer").text(user.isReviewer ? "Yes" : "No");
    $("#dAdmin").text(user.isAdmin ? "Yes" : "No");
}
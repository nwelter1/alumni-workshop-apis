
const getData = async () =>{
    let name = document.getElementById('user-input').value
    const response = await fetch(`https://www.codewars.com/api/v1/users/${name}`,{
        method: 'GET'
    });
    let data = await response.json()
    return data
}


const displayData = async () =>{
    let data = await getData()
    console.log(data)
    let username = data.username
    let clan = data.clan
    let honor = data.honor
    let code_challenges = data.codeChallenges.totalCompleted
    console.log(honor, username, clan)
    console.log(code_challenges)

    // Adding data
    document.getElementById('username').innerText = `Username ${username}`
    document.getElementById('clan').innerText = `Clan: ${clan}`
    document.getElementById('honor').innerText = `Honor: ${honor}`
    document.getElementById('completed').innerText = `Completed Kata: ${code_challenges}`
}
document.getElementById('btn').addEventListener('click',displayData);
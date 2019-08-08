/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/mharley12345')        
// .then(response =>{
//     //  cardCreator({response})
//     console.log(response.data)
//      response.data.forEach(obj=>{
//       followersArray.push(obj)
//      })
   
//      console.log(response)

// }).catch(err =>{
//   console.log(err)
// })

   axios.get(`https://api.github.com/users/mharley12345`)        
.then(response =>{
    cardCreator({response})
    console.log(response.data)

      followersArray.push(response)
     
   
     console.log(response)

}).catch(err =>{
  console.log(err)
})

   
       
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
followersArray.push(`{tetondan},{dustinmyers},{justsml},{luishrd},{bigknell}`)
console.log(followersArray)
function cardCreator({response}){
  let cards = document.querySelector('.cards')

  let card = document.createElement('div')
  card.classList.add('card')
  let image = document.createElement('img')
  image.src = `${response.data.avatar_url}`
  let cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  cards.appendChild(card)
  card.appendChild(image)
  card.appendChild(cardInfo)
  let name = document.createElement('h3')
  name.classList.add('name')
  name.textContent=`${response.data.name}`
  cardInfo.appendChild(name)
  let userName = document.createElement('p')
  userName.classList.add('username')
  userName.textContent=`${response.data.login}`
  cardInfo.appendChild(userName)
  let location = document.createElement('p')
  location.classList.add('Location')
  location.textContent='Location : Seattle, Wa'
  cardInfo.appendChild(location)
  let profile = document.createElement('p')
  profile.classList.add('Profile')
  profile.textContent= "GitHub Profile : " 
 
  let profileLink = document.createElement('a')
  profileLink.textContent= response.data.html_url
  profileLink.href=response.data.html_url

  profile.appendChild(profileLink)
  
  cardInfo.appendChild(profile)
  profile.appendChild(profileLink)
  let followers = document.createElement('p')
  followers.classList.add('followers')
  followers.textContent= "Followers: " + `${response.data.followers}`
  profile.appendChild(followers)
  let following = document.createElement('p')
  following.classList.add('following')
  following.textContent = "Following: " + `${response.data.following}`
  profile.appendChild(following)
  let bio = document.createElement('p')
  bio.classList.add('bio')
  bio.textContent="BIO: " + `${response.data.bio}`
  profile.appendChild(bio)


return card
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

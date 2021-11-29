const app=Vue.createApp({

data()
{
    return{
        firstName: 'John',
        email: 'john@stripe.com',
        gender: 'male',
        picture: 'https://randomuser.me/api/portraits/men/10.jpg'
}
},

methods:
{
    getUser()
    {
        console.log(this.firstName)
    },
},

})

app.mount('#app')
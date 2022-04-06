import React , {Component} from 'react';
import {View , Text , StyleSheet, TouchableOpacity, Image, BackHandler} from 'react-native';
import axios from 'axios'
import {Header} from 'react-native-elements'

export default class Home extends Component{

    constructor(){
        super();
        this.state = {movieDetails : {}};
    }

    get_movie = () => {
        const url = 'https://17e8-122-161-92-7.ngrok.io/movies'
        axios
            .get(url)
            .then(response => {
                let details = response.data.data;
                this.setState({movieDetails : details})
            })
            .catch(error => {
                console.log(error.message)
            });
    }

    liked_movie = () => {
        const url = 'https://17e8-122-161-92-7.ngrok.io/like'
        axios
        .post(url)
        .then(response => {
            this.get_movie();
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    disliked_movie = () => {
        const url = 'https://17e8-122-161-92-7.ngrok.io/dislike'
        axios
        .post(url)
        .then(response => {
            this.get_movie();
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    did_not_watch_movie = () => {
        const url = 'https://17e8-122-161-92-7.ngrok.io/did_not_watch'
        axios
        .post(url)
        .then(response => {
            this.get_movie();
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    componentDidMount(){
        this.get_movie()
    }


    render(){
        return(
            <View style ={{backgroundColor : 'red' , flex : 1}}>

                <View style = {{flex : 0.2 , backgroundColor : 'green'}}>

                </View>

                <View style = {{flex : 0.5 , backgroundColor : 'blue'}}>

                </View>
                <View style = {{flex : 0.3 , backgroundColor : 'yellow'}}>
                    <TouchableOpacity style = {styles.container}>
                        <Image source={require('../assets/like.png')} style = {styles.touchable_image}/>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.container}>
                    <Image source={require('../assets/dislike.png')} style = {styles.touchable_image}/>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.container}>
                    <Image source={require('../assets/didnotwatch.png')} style = {styles.touchable_image}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    touchable_image : {
        width : 50,
        height : 50
    }
})
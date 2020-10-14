import React from "react";

import SocialPlugin from "react-social-login";

class Login extends React.Component{
    render(){

        return(
            <button onClick={this.props.triggerLogin} {...this.props}>
                {this.props.children}
            </button>
        )
    }
}

export default SocialPlugin(Login);
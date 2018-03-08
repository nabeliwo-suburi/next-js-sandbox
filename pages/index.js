import React from 'react'
import Head from 'next/head'

const delay = (time, env) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(env)
    }, time)
  })
}

export default class Index extends React.Component {
  static async getInitialProps ({ res }) {
    const env = res ? 'server' : 'client'
    const obj = await delay(1000, { env })
    return obj
  }

  render() {
    return (
      <div>
        <Head>
          <title>Index page</title>
        </Head>
        <h1>hello world! {this.props.env}</h1>
      </div>
    )
  }
}

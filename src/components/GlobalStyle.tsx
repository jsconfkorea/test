import React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import emotionReset from 'emotion-reset'

const style = css`
  /* ${emotionNormalize} */
  ${emotionReset}
  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }
  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
  html {
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    overflow: hidden;
    height: 100%;
    word-break: keep-all;
    color: #333;
    line-height: 1.6;
    /* word-wrap: break-word; */
  }

  body {
    font-family: 'Noto Sans KR', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    /* -webkit-user-select: none; */
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    overflow: scroll;
    scrollbar-width: none;
    background-color: white;
    margin: 0 auto;
    padding: 0;

    word-break: keep-all;
    word-wrap: break-word;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    /* overflow: hidden; */
  }
  ::-webkit-scrollbar {
    display: none;
  }
`

export default () => <Global styles={style} />

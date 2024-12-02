import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
  addVideo: () => {},
  addToSaveVideos: () => {},
  activeTabItem: () => {},
  onChangeTheme: () => {},
  removeSaveVideos: () => {},
})

export default ThemeAndVideoContext

import { createAppContainer, createStackNavigator } from 'react-navigation';

//Ekranlar
import Main from './components/Main';
import Chat from './components/Chat';

//navigator ayarları
const AppNavigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

const AppContainer = createAppContainer(AppNavigator);

//main sayfanın başlaması için export edilmeli
export default AppContainer

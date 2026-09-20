import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7171nbtp.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="w7171nbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-connection-usb-cable-cables-cable-device-cord-computer-electronics-cords-usb"} {...others} />);
}

export default Component;

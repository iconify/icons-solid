import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu1r1geqz.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="yu1r1geqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:phone-signal-low-phone-mobile-device-signal-wireless-smartphone-iphone-bar-low-bars-android"} {...others} />);
}

export default Component;

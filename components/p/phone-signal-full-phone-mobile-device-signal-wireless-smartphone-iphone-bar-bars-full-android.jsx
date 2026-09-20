import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqqu69bdf.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="tqqu69bdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:phone-signal-full-phone-mobile-device-signal-wireless-smartphone-iphone-bar-bars-full-android"} {...others} />);
}

export default Component;

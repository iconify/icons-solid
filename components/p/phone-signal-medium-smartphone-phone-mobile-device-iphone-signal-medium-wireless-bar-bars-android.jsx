import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz7zwov4t.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xz7zwov4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:phone-signal-medium-smartphone-phone-mobile-device-iphone-signal-medium-wireless-bar-bars-android"} {...others} />);
}

export default Component;

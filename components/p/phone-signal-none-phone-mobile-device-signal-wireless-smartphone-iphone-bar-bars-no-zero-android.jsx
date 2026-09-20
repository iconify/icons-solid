import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzk5aq42g.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="pzk5aq42g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:phone-signal-none-phone-mobile-device-signal-wireless-smartphone-iphone-bar-bars-no-zero-android"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylaicorwm.css';
import '../../css/s/su7a0euxn.css';
import '../../css/n/np4ropmkg.css';
import '../../css/b/bg3wu7bxo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ylaicorwm"/><path class="su7a0euxn"/><path class="np4ropmkg"/><path class="bg3wu7bxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:usb-48-bold"} {...others} />);
}

export default Component;

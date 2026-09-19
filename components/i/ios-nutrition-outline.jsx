import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcj3c8bij.css';
import '../../css/w/w5w3u0b1j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kcj3c8bij"/><path class="w5w3u0b1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-nutrition-outline"} {...others} />);
}

export default Component;

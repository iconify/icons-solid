import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fef2p4b2l.css';
import '../../css/r/r2rl9cbwe.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG6BpB5cBi" x1="0" x2="512" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="fef2p4b2l"/><stop offset="1"/></linearGradient><path fill="url(#SVG6BpB5cBi)" class="r2rl9cbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wastebin-dark"} {...others} />);
}

export default Component;

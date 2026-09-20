import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/br4_5duwz.css';
import '../../css/n/nke8g4bcn.css';
import '../../css/n/nssu5butl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="br4_5duwz"/><path class="nke8g4bcn"/><path class="nssu5butl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playback-speed-linear"} {...others} />);
}

export default Component;

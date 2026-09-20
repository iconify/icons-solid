import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aahgoh0mn.css';
import '../../css/r/r_k-6xaei.css';
import '../../css/w/wruzqvbcf.css';
import '../../css/w/w8fcmcc3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="aahgoh0mn"/><path class="r_k-6xaei"/><path class="wruzqvbcf"/><path class="w8fcmcc3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:station-minimalistic-linear"} {...others} />);
}

export default Component;

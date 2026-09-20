import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nx9b_s0ui.css';
import '../../css/i/ip_zkkjah.css';
import '../../css/r/rna54ibnn.css';
import '../../css/g/g40pzzt0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nx9b_s0ui"/><path class="ip_zkkjah"/><path class="rna54ibnn"/><path class="g40pzzt0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-linear"} {...others} />);
}

export default Component;

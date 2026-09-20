import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/i/imrhgbc8c.css';
import '../../css/n/np1e_hbeg.css';
import '../../css/p/ppfhar_-b.css';
import '../../css/h/h3if4--oh.css';
import '../../css/y/y59k8g5qg.css';
import '../../css/o/ofyiqqnwj.css';
import '../../css/x/xddt81bly.css';
import '../../css/t/t-rhypbnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle transform="rotate(180 12 12)" class="h_tsn8bxt"/><circle transform="rotate(180 20 14)" class="imrhgbc8c"/><circle transform="matrix(-1 0 0 1 6 8)" class="np1e_hbeg"/><path class="ppfhar_-b"/><path class="h3if4--oh"/><path class="y59k8g5qg"/><path class="ofyiqqnwj"/><path class="xddt81bly"/><path class="t-rhypbnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-3-linear"} {...others} />);
}

export default Component;

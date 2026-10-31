import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/k/kn865zbho.css';
import '../../css/u/uxkve0yqn.css';
import '../../css/j/jah5ns0nl.css';
import '../../css/m/m2kkwod6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGANyDfcYz" x1="9" x2="15" y1="1.53" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGANyDfcYz)" class="kn865zbho"/><path class="uxkve0yqn wm-shine"/><path class="jah5ns0nl wm-shine"/><path class="m2kkwod6q wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:rabbit"} {...others} />);
}

export default Component;

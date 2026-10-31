import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hc73gr4ws.css';
import '../../css/m/mdcr0qbvu.css';
import '../../css/v/vd-hmwbqu.css';
import '../../css/e/e25t0_sfa.css';
import '../../css/c/cpui1zb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hc73gr4ws wm-shadow"/><path class="mdcr0qbvu"/><path class="vd-hmwbqu"/><path class="e25t0_sfa"/><path class="cpui1zb0i wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:pichkari"} {...others} />);
}

export default Component;

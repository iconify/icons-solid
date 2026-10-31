import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/t/t8z19oenk.css';
import '../../css/i/i8bppubde.css';
import '../../css/v/vs052ibta.css';
import '../../css/n/nxnr_tbxl.css';
import '../../css/y/y18sgjb2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="t8z19oenk"/><path class="i8bppubde"/><path class="vs052ibta"/><path class="nxnr_tbxl"/><path class="y18sgjb2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:clock"} {...others} />);
}

export default Component;

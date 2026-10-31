import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vt76habzb.css';
import '../../css/t/tfz8s6goq.css';
import '../../css/u/u2zsd7khw.css';
import '../../css/n/n1kmjebwt.css';
import '../../css/s/shj5ccceq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vt76habzb wm-shadow"/><path class="tfz8s6goq"/><path class="u2zsd7khw"/><path class="n1kmjebwt"/><path class="shj5ccceq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:tennis"} {...others} />);
}

export default Component;

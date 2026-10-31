import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/k/kkq1fg8jn.css';
import '../../css/x/xx08jjpuk.css';
import '../../css/u/u6d-p888h.css';
import '../../css/a/asv-xebhi.css';
import '../../css/d/dpck1qbnr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="kkq1fg8jn"/><path class="xx08jjpuk"/><path class="u6d-p888h"/><path class="asv-xebhi"/><path class="dpck1qbnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:x-circle"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k4nruc-co.css';
import '../../css/j/j4jgqm3yv.css';
import '../../css/u/u_i6qlrvq.css';
import '../../css/w/w_2mv-adh.css';
import '../../css/c/ctht6_bhr.css';
import '../../css/m/mzsdnocnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k4nruc-co wm-shadow"/><path class="j4jgqm3yv"/><path class="u_i6qlrvq"/><path class="w_2mv-adh"/><path class="ctht6_bhr"/><path class="mzsdnocnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-owl"} {...others} />);
}

export default Component;

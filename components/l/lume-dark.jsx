import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fsm3478wc.css';
import '../../css/h/h_jqfd9ib.css';
import '../../css/v/v50u5-bvf.css';
import '../../css/k/k2qd-sbdq.css';
import '../../css/r/r4q6eeucj.css';
import '../../css/t/tbw55vb3n.css';
import '../../css/z/zdqcctbbn.css';
import '../../css/t/tvp0a18vr.css';

const viewBox = {"width":443,"height":443};
const content = `<g class="ft5dv1b6b"><path class="fsm3478wc"/><path class="h_jqfd9ib"/><path class="v50u5-bvf"/><path class="k2qd-sbdq"/><circle fill="url(#SVGKNxFocfc)" class="r4q6eeucj"/><path class="tbw55vb3n"/><defs><radialGradient id="SVGKNxFocfc" cx="0" cy="0" r="1" gradientTransform="rotate(90 -24.811 246.689)scale(171.5)" gradientUnits="userSpaceOnUse"><stop class="zdqcctbbn"/><stop offset="1" class="tvp0a18vr"/></radialGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lume-dark"} {...others} />);
}

export default Component;

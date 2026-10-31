import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v-g11-76a.css';
import '../../css/y/y0wxsxbyu.css';
import '../../css/z/zioqwz9dq.css';
import '../../css/j/jh5ctibwm.css';
import '../../css/n/ni6eqkbpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v-g11-76a wm-shadow"/><path class="y0wxsxbyu"/><path class="zioqwz9dq"/><path class="jh5ctibwm"/><path class="ni6eqkbpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:projector"} {...others} />);
}

export default Component;

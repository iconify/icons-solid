import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fhvke-b_r.css';
import '../../css/j/j69eo_blq.css';
import '../../css/x/xjzzz3b7x.css';
import '../../css/m/muqre9t7i.css';
import '../../css/d/dw04ljbdj.css';
import '../../css/t/tw8qnmbcf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fhvke-b_r wm-shadow"/><path class="j69eo_blq"/><path class="xjzzz3b7x"/><path class="muqre9t7i"/><path class="dw04ljbdj"/><path class="tw8qnmbcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:beer"} {...others} />);
}

export default Component;

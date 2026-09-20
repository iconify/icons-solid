import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry80fpboa.css';
import '../../css/u/ujbk8xv8b.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/y5ci_mb6j.css';
import '../../css/j/j9w5pbx8g.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ry80fpboa"/><path class="ujbk8xv8b"/><g class="ij2x_72vy"><path class="y5ci_mb6j"/><path class="j9w5pbx8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:gorilla"} {...others} />);
}

export default Component;

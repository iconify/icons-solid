import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d-prlc24s.css';
import '../../css/u/ukswfvb9b.css';
import '../../css/r/rz80qw0kw.css';
import '../../css/u/u90yf2b5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="d-prlc24s"/><path class="ukswfvb9b"/><path class="rz80qw0kw wm-a"/><path class="u90yf2b5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:teddy-bear-duo"} {...others} />);
}

export default Component;

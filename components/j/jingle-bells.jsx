import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yy4qh1_fz.css';
import '../../css/k/kgd9fpbus.css';
import '../../css/j/jw7wppyvv.css';
import '../../css/q/qudsxsj-p.css';
import '../../css/t/t52lp7wnz.css';
import '../../css/r/rjx8qmbiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yy4qh1_fz"/><path class="kgd9fpbus"/><path class="jw7wppyvv"/><path class="qudsxsj-p wm-s"/><path class="t52lp7wnz"/><path class="rjx8qmbiz wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:jingle-bells"} {...others} />);
}

export default Component;

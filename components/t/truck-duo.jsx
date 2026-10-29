import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f7hl_1dzk.css';
import '../../css/k/k02fzkb_b.css';
import '../../css/w/wjxdsob9d.css';
import '../../css/n/n255akb9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="f7hl_1dzk"/><path class="k02fzkb_b wm-a"/><path class="wjxdsob9d wm-a"/><path class="n255akb9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:truck-duo"} {...others} />);
}

export default Component;

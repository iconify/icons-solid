import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sx38bxbwl.css';
import '../../css/a/a1x9fccec.css';
import '../../css/w/w4ma32w-d.css';
import '../../css/s/sarsgdhob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sx38bxbwl wm-shadow"/><path class="a1x9fccec"/><path class="w4ma32w-d"/><path class="sarsgdhob wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:shower-head"} {...others} />);
}

export default Component;

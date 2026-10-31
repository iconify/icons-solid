import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/facdfwb9y.css';
import '../../css/n/n__4bc2mm.css';
import '../../css/k/kvny8wo_h.css';
import '../../css/w/w8zqb6bvh.css';
import '../../css/f/fup5jlbuo.css';
import '../../css/r/r1z-ibbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="facdfwb9y wm-shadow"/><path class="n__4bc2mm"/><path class="kvny8wo_h"/><path class="w8zqb6bvh"/><path class="fup5jlbuo"/><path class="r1z-ibbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:tag"} {...others} />);
}

export default Component;

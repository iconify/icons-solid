import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g7cvenbkm.css';
import '../../css/z/zp6-nloyx.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/u/uoxlnw9ea.css';
import '../../css/y/y3xlt_b-b.css';
import '../../css/d/d5joaknns.css';
import '../../css/h/h-3cnj94t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g7cvenbkm"/><path class="zp6-nloyx"/><g class="mc2zb0bvp"><path class="uoxlnw9ea"/><path class="y3xlt_b-b"/><path class="d5joaknns"/><path class="h-3cnj94t"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9a2o1loy.css';
import '../../css/y/yck3s0lzl.css';
import '../../css/h/hjy3oqb3o.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/r/rs8s5zbdk.css';
import '../../css/p/pu-qh6ofa.css';
import '../../css/i/i8gtjobbg.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="h9a2o1loy"><path class="yck3s0lzl"/><path class="hjy3oqb3o"/></g><g class="ij2x_72vy"><path class="rs8s5zbdk"/><path class="pu-qh6ofa"/><path class="i8gtjobbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:turkey"} {...others} />);
}

export default Component;

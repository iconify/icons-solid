import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fdv_t3ltl.css';
import '../../css/v/v18c9fbau.css';
import '../../css/b/ba-qp9bir.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="fdv_t3ltl"/><path class="v18c9fbau"/><path class="ba-qp9bir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bw-4x3"} {...others} />);
}

export default Component;

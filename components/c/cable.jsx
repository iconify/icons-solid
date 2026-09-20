import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byuc_xk6t.css';
import '../../css/v/vre8rpb7n.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/x59ungbhn.css';
import '../../css/z/zh0edfbzg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="byuc_xk6t"/><path class="vre8rpb7n"/><g class="ij2x_72vy"><path class="x59ungbhn"/><path class="zh0edfbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cable"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbyjr751y.css';
import '../../css/u/ue2imhb3h.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/x6ihl6b_j.css';
import '../../css/h/h-hncl-8g.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="sbyjr751y"/><path class="ue2imhb3h"/><g class="ij2x_72vy"><path class="x6ihl6b_j"/><path class="h-hncl-8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:popcorn"} {...others} />);
}

export default Component;

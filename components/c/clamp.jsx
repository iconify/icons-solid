import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr__skb2i.css';
import '../../css/e/ek3d--bzq.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/w/w5srz5bvt.css';
import '../../css/n/ne0fmbx4f.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vr__skb2i"/><path class="ek3d--bzq"/><g class="ij2x_72vy"><path class="w5srz5bvt"/><path class="ne0fmbx4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:clamp"} {...others} />);
}

export default Component;

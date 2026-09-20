import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-dc168xj.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/n/ne6g2tklt.css';
import '../../css/h/hv1f-5bwy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="l-dc168xj"/><g class="ij2x_72vy"><path class="ne6g2tklt"/><path class="hv1f-5bwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:page-move"} {...others} />);
}

export default Component;

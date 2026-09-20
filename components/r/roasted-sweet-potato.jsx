import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh569x-ti.css';
import '../../css/i/i9d56db8d.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/kebej8zjv.css';
import '../../css/s/sdm1hnz8s.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="sh569x-ti"/><path class="i9d56db8d"/><g class="ij2x_72vy"><path class="kebej8zjv"/><path class="sdm1hnz8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:roasted-sweet-potato"} {...others} />);
}

export default Component;

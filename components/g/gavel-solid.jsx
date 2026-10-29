import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/ki8rvvk-j.css';
import '../../css/l/lrncrhbcj.css';
import '../../css/p/pxd14elkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="ki8rvvk-j"/><path class="lrncrhbcj wm-a"/><path class="pxd14elkk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gavel-solid"} {...others} />);
}

export default Component;

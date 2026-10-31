import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uw256_b_w.css';
import '../../css/q/qngpuubyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="uw256_b_w wm-k"/><path class="qngpuubyn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flashlight-gloss"} {...others} />);
}

export default Component;

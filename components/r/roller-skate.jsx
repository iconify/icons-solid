import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sohxbzcce.css';
import '../../css/s/s0z9onnwp.css';
import '../../css/r/r8tn7gwpr.css';
import '../../css/z/zw8-u0bgh.css';
import '../../css/z/z07h09bty.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/uknwv9bcn.css';
import '../../css/w/wzdo1ybek.css';
import '../../css/w/wf0s8rbuh.css';
import '../../css/j/jc2bwzprd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="sohxbzcce"/><path class="s0z9onnwp"/><path class="r8tn7gwpr"/><path class="zw8-u0bgh"/><path class="z07h09bty"/><g class="jn8qy4bru"><path class="uknwv9bcn"/><circle class="wzdo1ybek"/><circle class="wf0s8rbuh"/><path class="jc2bwzprd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:roller-skate"} {...others} />);
}

export default Component;

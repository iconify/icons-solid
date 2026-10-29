import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j4e45e79l.css';
import '../../css/v/vvzmr-fai.css';
import '../../css/k/kc7our_sj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="j4e45e79l"/><path class="vvzmr-fai wm-a"/><path class="kc7our_sj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paint-bucket-solid"} {...others} />);
}

export default Component;

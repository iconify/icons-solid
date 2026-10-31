import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pmu18cbyv.css';
import '../../css/k/kiy5cv2jm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="pmu18cbyv wm-k"/><path class="kiy5cv2jm wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gavel-gloss"} {...others} />);
}

export default Component;

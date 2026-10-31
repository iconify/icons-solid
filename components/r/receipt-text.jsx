import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qnnc6fbcv.css';
import '../../css/j/jox8k1brk.css';
import '../../css/y/ytth9f11g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qnnc6fbcv wm-k"/><path class="jox8k1brk wm-shine"/><path class="wm-shine ytth9f11g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:receipt-text"} {...others} />);
}

export default Component;

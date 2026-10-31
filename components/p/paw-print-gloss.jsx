import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f3zjrvcqj.css';
import '../../css/i/ih3ld8pwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="f3zjrvcqj wm-k"/><path class="ih3ld8pwj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paw-print-gloss"} {...others} />);
}

export default Component;

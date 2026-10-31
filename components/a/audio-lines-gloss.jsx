import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pe76b1brk.css';
import '../../css/j/jvydgjbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="pe76b1brk wm-k"/><path class="jvydgjbwy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:audio-lines-gloss"} {...others} />);
}

export default Component;

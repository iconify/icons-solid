import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rmmjovc3u.css';
import '../../css/n/nc20ogbdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="rmmjovc3u wm-k"/><path class="nc20ogbdw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:microphone-gloss"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/beg0qni4u.css';
import '../../css/i/if-q0gzgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="beg0qni4u wm-k"/><path class="if-q0gzgs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:users-round-gloss"} {...others} />);
}

export default Component;

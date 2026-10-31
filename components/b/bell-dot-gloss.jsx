import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/osjs0jb0w.css';
import '../../css/f/fa_lqsjlt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="osjs0jb0w wm-k"/><path class="fa_lqsjlt wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-dot-gloss"} {...others} />);
}

export default Component;

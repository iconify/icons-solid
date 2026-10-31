import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j8oi71b0s.css';
import '../../css/x/xms00_elr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="j8oi71b0s wm-k"/><path class="wm-s xms00_elr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pichkari-gloss"} {...others} />);
}

export default Component;

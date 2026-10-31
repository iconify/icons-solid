import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jqejesb1x.css';
import '../../css/j/ju4tmmb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="jqejesb1x wm-k"/><path class="ju4tmmb_q wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:moon-star-gloss"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hrxw0upjl.css';
import '../../css/z/z5c82xbou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="hrxw0upjl wm-k"/><path class="wm-a z5c82xbou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:highlighter-gloss"} {...others} />);
}

export default Component;

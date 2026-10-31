import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c-ttospkb.css';
import '../../css/w/wude1rb1k.css';
import '../../css/s/s_j_ghb2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="c-ttospkb wm-k"/><path class="wm-a wude1rb1k"/><path class="s_j_ghb2w wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cauldron-gloss"} {...others} />);
}

export default Component;

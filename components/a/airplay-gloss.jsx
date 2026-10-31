import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i19g0i_wl.css';
import '../../css/j/jgwi2aczb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="i19g0i_wl wm-k"/><path class="jgwi2aczb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:airplay-gloss"} {...others} />);
}

export default Component;

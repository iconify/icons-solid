import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e37ombcyg.css';
import '../../css/m/mj46t_bkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="e37ombcyg wm-k"/><path class="mj46t_bkb wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:server-cog-gloss"} {...others} />);
}

export default Component;

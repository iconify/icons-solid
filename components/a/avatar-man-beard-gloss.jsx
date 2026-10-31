import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cszr5abch.css';
import '../../css/y/yddw2s6ww.css';
import '../../css/z/zju4ovbgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="cszr5abch wm-k"/><path class="wm-k yddw2s6ww"/><path class="wm-k zju4ovbgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-beard-gloss"} {...others} />);
}

export default Component;

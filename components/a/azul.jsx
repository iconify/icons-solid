import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex-9i5bwz.css';
import '../../css/s/sub5uvbpm.css';
import '../../css/s/s0n6_-bas.css';
import '../../css/q/qqf_skbkp.css';
import '../../css/j/j9n-wgfhi.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect fill="url(#SVGigDaJbgS)" class="ex-9i5bwz"/><g clip-path="url(#SVGg3D4Hd7H)"><path clip-rule="evenodd" class="sub5uvbpm"/></g><defs><linearGradient id="SVGigDaJbgS" x1="0" x2="256" y1="0" y2="266" gradientUnits="userSpaceOnUse"><stop class="s0n6_-bas"/><stop offset="1" class="qqf_skbkp"/></linearGradient><clipPath id="SVGg3D4Hd7H"><path class="j9n-wgfhi"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:azul"} {...others} />);
}

export default Component;

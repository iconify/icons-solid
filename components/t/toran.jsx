import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c9lgnpnwd.css';
import '../../css/f/foci301wn.css';
import '../../css/y/yaatpweri.css';
import '../../css/w/w4od_ccfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="c9lgnpnwd wm-shadow"/><path class="foci301wn"/><path class="yaatpweri"/><path class="w4od_ccfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:toran"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x1ti5ebvp.css';
import '../../css/b/bp747x4vu.css';
import '../../css/z/zqklhhbcj.css';
import '../../css/z/z-yyzxbhp.css';
import '../../css/e/e5leyacwk.css';
import '../../css/w/w3jddjb8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow x1ti5ebvp"/><path class="bp747x4vu"/><path class="zqklhhbcj"/><path class="z-yyzxbhp"/><path class="e5leyacwk"/><path class="w3jddjb8z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:video-plus"} {...others} />);
}

export default Component;

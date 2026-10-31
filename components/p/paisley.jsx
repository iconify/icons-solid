import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fojojjb2w.css';
import '../../css/e/eglri6m1j.css';
import '../../css/j/j81d8w44a.css';
import '../../css/w/wnuf0j6-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="fojojjb2w"><path class="eglri6m1j wm-shadow"/><path class="j81d8w44a wm-k"/><path class="wm-a wnuf0j6-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:paisley"} {...others} />);
}

export default Component;

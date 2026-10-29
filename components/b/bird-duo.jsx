import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/ziiwtxl1s.css';
import '../../css/q/q4lh_hb6d.css';
import '../../css/c/cd16omk9a.css';
import '../../css/q/qz-3_0bjm.css';
import '../../css/y/yr2pvkloa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ziiwtxl1s"/><path class="q4lh_hb6d wm-a"/><path class="cd16omk9a wm-a"/><path class="qz-3_0bjm"/><path class="wm-a yr2pvkloa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bird-duo"} {...others} />);
}

export default Component;

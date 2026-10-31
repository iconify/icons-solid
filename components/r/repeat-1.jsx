import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z6zwzhi8a.css';
import '../../css/l/l397gsbwn.css';
import '../../css/h/h_sq5lbcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="z6zwzhi8a"/><path class="l397gsbwn"/><path class="h_sq5lbcs wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:repeat-1"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/forpazohq.css';
import '../../css/v/vt6-ivbtd.css';
import '../../css/c/cam9jzzbs.css';
import '../../css/m/m8-4o3bpy.css';
import '../../css/r/r1uvmmr9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="forpazohq wm-k"/><path class="vt6-ivbtd wm-a"/><path class="cam9jzzbs wm-shadow"/><path class="m8-4o3bpy wm-k"/><path class="r1uvmmr9d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:reply-engrave"} {...others} />);
}

export default Component;

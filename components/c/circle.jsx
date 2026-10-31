import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jf1adk6iy.css';
import '../../css/f/f6iotpbxr.css';
import '../../css/m/m66-1ri6q.css';
import '../../css/x/xrzbtebzf.css';
import '../../css/l/li1o_ub6x.css';
import '../../css/q/qjvslkisf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jf1adk6iy wm-shadow"/><path class="f6iotpbxr"/><path class="m66-1ri6q"/><path class="xrzbtebzf"/><path class="li1o_ub6x"/><path class="qjvslkisf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:circle"} {...others} />);
}

export default Component;

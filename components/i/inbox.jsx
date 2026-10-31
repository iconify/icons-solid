import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ioprt-eyc.css';
import '../../css/q/q7bburbqc.css';
import '../../css/l/ln0vr5b8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ioprt-eyc wm-shadow"/><path class="q7bburbqc"/><path class="ln0vr5b8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:inbox"} {...others} />);
}

export default Component;

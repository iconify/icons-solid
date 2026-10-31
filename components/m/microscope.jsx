import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c7fv0cchs.css';
import '../../css/p/p0g_1wjlq.css';
import '../../css/t/t5ro9fbav.css';
import '../../css/k/koqfc1bhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="c7fv0cchs wm-shadow"/><path class="p0g_1wjlq"/><path class="t5ro9fbav"/><path class="koqfc1bhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:microscope"} {...others} />);
}

export default Component;

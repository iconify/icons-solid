import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mnx4x48_e.css';
import '../../css/r/r3ynygbhn.css';
import '../../css/v/vgwlu2rob.css';
import '../../css/t/t6gzoggtg.css';
import '../../css/m/mozz0kbwp.css';
import '../../css/w/w3sttqm3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mnx4x48_e wm-shadow"/><path class="r3ynygbhn"/><path class="vgwlu2rob"/><path class="t6gzoggtg"/><path class="mozz0kbwp"/><path class="w3sttqm3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:basketball"} {...others} />);
}

export default Component;

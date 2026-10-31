import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/myxdex6dx.css';
import '../../css/r/rn9lqlbkp.css';
import '../../css/m/mtkqh-b8x.css';
import '../../css/x/xedub3b-f.css';
import '../../css/z/zn_9l-v2f.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="myxdex6dx wm-shadow"/><path class="rn9lqlbkp"/><path class="mtkqh-b8x"/><path class="xedub3b-f"/><path class="zn_9l-v2f"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:server-off"} {...others} />);
}

export default Component;

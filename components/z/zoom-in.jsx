import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lji_-4zcb.css';
import '../../css/o/on-nrcbsr.css';
import '../../css/n/nm2jzmb-d.css';
import '../../css/r/r8sqoincp.css';
import '../../css/t/t_z8dvbue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="lji_-4zcb wm-shadow"/><path class="on-nrcbsr"/><path class="nm2jzmb-d"/><path class="r8sqoincp"/><path class="t_z8dvbue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:zoom-in"} {...others} />);
}

export default Component;

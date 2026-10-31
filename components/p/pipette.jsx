import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dp9j5sjpd.css';
import '../../css/p/pbznkubfz.css';
import '../../css/f/f145c8c8n.css';
import '../../css/d/dtghwpbgr.css';
import '../../css/l/lkw0-gbhg.css';
import '../../css/i/ikz7brimr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dp9j5sjpd wm-shadow"/><path class="pbznkubfz"/><path class="f145c8c8n"/><path class="dtghwpbgr"/><path class="lkw0-gbhg"/><path class="ikz7brimr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:pipette"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v5fz6ctfc.css';
import '../../css/y/yfgvy4wyi.css';
import '../../css/y/yk8z-bc2n.css';
import '../../css/u/uh12teatr.css';
import '../../css/m/m4dvaws_s.css';
import '../../css/i/ik_3-3epg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v5fz6ctfc wm-shadow"/><path class="yfgvy4wyi"/><path class="yk8z-bc2n"/><path class="uh12teatr"/><path class="m4dvaws_s"/><path class="ik_3-3epg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:message-circle-question"} {...others} />);
}

export default Component;

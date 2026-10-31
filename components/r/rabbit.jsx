import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u14-gky4i.css';
import '../../css/o/okqpc_7qe.css';
import '../../css/l/la9f4lc2c.css';
import '../../css/e/enr0k2lak.css';
import '../../css/z/z4ue-qnje.css';
import '../../css/s/s0we3dbpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="u14-gky4i wm-shadow"/><path class="okqpc_7qe"/><path class="la9f4lc2c"/><path class="enr0k2lak"/><path class="z4ue-qnje"/><path class="s0we3dbpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:rabbit"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mxv--jldm.css';
import '../../css/q/q59vtq10u.css';
import '../../css/g/ggnc_l97e.css';
import '../../css/i/inhs5_b8f.css';
import '../../css/t/t12krebbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mxv--jldm wm-shadow"/><path class="q59vtq10u"/><path class="ggnc_l97e"/><path class="inhs5_b8f"/><path class="t12krebbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:dholak"} {...others} />);
}

export default Component;

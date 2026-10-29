import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rn7gq1fok.css';
import '../../css/q/qmauy_88m.css';
import '../../css/y/y7lidtbhb.css';
import '../../css/w/wqb-0n4qk.css';
import '../../css/h/hjz_nrpwd.css';
import '../../css/m/mb4fw_c4z.css';
import '../../css/x/x677x9l5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rn7gq1fok wm-deco"/><path class="qmauy_88m wm-deco"/><path class="wm-k y7lidtbhb"/><path class="wm-a wqb-0n4qk"/><path class="hjz_nrpwd wm-s"/><path class="mb4fw_c4z wm-k"/><path class="wm-s x677x9l5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-check-blueprint"} {...others} />);
}

export default Component;

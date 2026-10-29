import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wdbvkhbpy.css';
import '../../css/x/x7ag86bpt.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/c/c-a4_nb-a.css';
import '../../css/q/q4fjqwbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wdbvkhbpy wm-k"/><path class="wm-shadow x7ag86bpt"/><path class="wm-k yw4fz_b6b"/><path class="c-a4_nb-a wm-k"/><path class="q4fjqwbqj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lucky-coin-engrave"} {...others} />);
}

export default Component;

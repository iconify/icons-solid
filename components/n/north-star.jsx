import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r353ifb5s.css';
import '../../css/m/meesmg-tw.css';
import '../../css/r/rc_jrfdpb.css';
import '../../css/g/ge4xd36nc.css';
import '../../css/g/gcb86ib4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="r353ifb5s wm-shadow"/><path class="meesmg-tw"/><path class="rc_jrfdpb"/><path class="ge4xd36nc"/><path class="gcb86ib4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:north-star"} {...others} />);
}

export default Component;

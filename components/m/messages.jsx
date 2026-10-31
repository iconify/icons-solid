import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uo4ezuigs.css';
import '../../css/u/uvfsuccod.css';
import '../../css/r/rz9impb_b.css';
import '../../css/m/m4d-on-2j.css';
import '../../css/c/c37la7upp.css';
import '../../css/m/my-h7bbyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="uo4ezuigs wm-shadow"/><path class="uvfsuccod"/><path class="rz9impb_b"/><path class="m4d-on-2j"/><path class="c37la7upp"/><path class="my-h7bbyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:messages"} {...others} />);
}

export default Component;

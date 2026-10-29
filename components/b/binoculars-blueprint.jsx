import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wlflabc0j.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/o/o0i_qnbvj.css';
import '../../css/g/g8_iol2hx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wlflabc0j wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="o0i_qnbvj wm-k"/><path class="g8_iol2hx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:binoculars-blueprint"} {...others} />);
}

export default Component;

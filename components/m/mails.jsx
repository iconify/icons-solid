import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wbpxjwb2l.css';
import '../../css/y/y5qtjbb5f.css';
import '../../css/w/wyxy0gblv.css';
import '../../css/j/j46d0n36j.css';
import '../../css/j/jmo_4-b3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wbpxjwb2l wm-shadow"/><path class="y5qtjbb5f"/><path class="wyxy0gblv"/><path class="j46d0n36j"/><path class="jmo_4-b3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:mails"} {...others} />);
}

export default Component;

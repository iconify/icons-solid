import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a3ty376mn.css';
import '../../css/x/xd1e2rb0d.css';
import '../../css/h/hled3t8ca.css';
import '../../css/d/dlyq4oxpk.css';
import '../../css/j/jjw18qblr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a3ty376mn wm-shadow"/><path class="xd1e2rb0d"/><path class="hled3t8ca"/><path class="dlyq4oxpk"/><path class="jjw18qblr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:heart-pulse"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/brmzzdr0t.css';
import '../../css/j/jz5xjjbmk.css';
import '../../css/m/mbuc5196p.css';
import '../../css/q/qd26gpbiv.css';
import '../../css/r/rtqu77szh.css';
import '../../css/d/d9hlylb0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="brmzzdr0t wm-shadow"/><path class="jz5xjjbmk"/><path class="mbuc5196p"/><path class="qd26gpbiv"/><path class="rtqu77szh"/><path class="d9hlylb0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:dices"} {...others} />);
}

export default Component;

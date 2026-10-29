import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/day19wbtv.css';
import '../../css/g/gv95bdacm.css';
import '../../css/x/x5e6z5q6n.css';
import '../../css/x/xm2wmtxqn.css';
import '../../css/d/dh8vynb3i.css';
import '../../css/f/fmtboebos.css';
import '../../css/c/crct4jbgb.css';
import '../../css/y/ywp1uo-iw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="day19wbtv wm-deco"/><path class="gv95bdacm wm-deco"/><path class="wm-deco x5e6z5q6n"/><path class="wm-k xm2wmtxqn"/><path class="dh8vynb3i wm-a"/><path class="fmtboebos wm-s"/><path class="crct4jbgb wm-k"/><path class="wm-a ywp1uo-iw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shower-head-blueprint"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx3cd51uc.css';
import '../../css/w/wd-rj4ouq.css';
import '../../css/y/yrqzocthv.css';
import '../../css/y/yy1gaz41b.css';
import '../../css/t/ttcuwmbxr.css';
import '../../css/l/l7dff-b2y.css';
import '../../css/q/qbw_fnvbw.css';
import '../../css/t/t11k26b7q.css';
import '../../css/o/oe4rq9krh.css';
import '../../css/p/p6n0p2sko.css';
import '../../css/x/x4wx8ubro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hx3cd51uc wm-shadow"/><path class="wd-rj4ouq wm-k"/><path class="wm-k yrqzocthv"/><path class="wm-k yy1gaz41b"/><path class="ttcuwmbxr wm-k"/><path class="l7dff-b2y wm-k"/><path class="qbw_fnvbw wm-shine"/><path class="t11k26b7q wm-a"/><path class="oe4rq9krh wm-a"/><path class="p6n0p2sko wm-k"/><path class="wm-a x4wx8ubro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:calendar-span"} {...others} />);
}

export default Component;

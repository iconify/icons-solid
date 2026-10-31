import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cc531yb-f.css';
import '../../css/j/j3r1u6bwi.css';
import '../../css/l/l-rfgwb-j.css';
import '../../css/k/kxeauv6lv.css';
import '../../css/s/sbnzdzbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="cc531yb-f"/><path class="j3r1u6bwi wm-shine"/><path class="l-rfgwb-j wm-k"/><path class="kxeauv6lv wm-a"/><path class="sbnzdzbbh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:log-out"} {...others} />);
}

export default Component;

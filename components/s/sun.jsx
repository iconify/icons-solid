import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/ww_3nyx8m.css';
import '../../css/b/b1tqzwb2w.css';
import '../../css/r/rha2rwb2z.css';
import '../../css/m/mhnp95buk.css';
import '../../css/s/s9ct1bcrl.css';
import '../../css/v/v2s6hdjvw.css';
import '../../css/j/j1oerhbwi.css';
import '../../css/k/kgf0bc3ao.css';
import '../../css/x/xtkckxbjg.css';
import '../../css/z/z4i5nvnxz.css';
import '../../css/z/zd8ucmbbz.css';
import '../../css/g/g6tzpk5ac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k ww_3nyx8m"/><path class="b1tqzwb2w wm-a"/><path class="rha2rwb2z wm-deco"/><path class="mhnp95buk wm-k"/><path class="s9ct1bcrl wm-a"/><path class="v2s6hdjvw wm-shadow"/><path class="j1oerhbwi wm-shine"/><path class="kgf0bc3ao wm-shine"/><path class="wm-a xtkckxbjg"/><path class="wm-a z4i5nvnxz"/><path class="wm-a zd8ucmbbz"/><path class="g6tzpk5ac wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:sun"} {...others} />);
}

export default Component;

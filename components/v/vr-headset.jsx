import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/chm41kb4l.css';
import '../../css/e/euahgmvxc.css';
import '../../css/i/i5zuhnc6j.css';
import '../../css/z/zb6mz35nb.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="chm41kb4l"/><path class="euahgmvxc wm-shine"/><path class="i5zuhnc6j wm-k"/><path class="wm-a zb6mz35nb"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:vr-headset"} {...others} />);
}

export default Component;

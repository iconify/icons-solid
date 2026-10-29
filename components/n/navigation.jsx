import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcjghl10h.css';
import '../../css/c/cepculi1i.css';
import '../../css/t/tjwfuacrq.css';
import '../../css/y/yfi554o7f.css';
import '../../css/u/up51oabts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wcjghl10h wm-deco"/><path class="cepculi1i wm-k"/><path class="tjwfuacrq wm-k"/><path class="wm-k yfi554o7f"/><path class="up51oabts wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:navigation"} {...others} />);
}

export default Component;

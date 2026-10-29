import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kgy9pjbzm.css';
import '../../css/i/i930grbpz.css';
import '../../css/q/qa7s7w09v.css';
import '../../css/w/wc2jrzf9o.css';
import '../../css/k/k-g31sewk.css';
import '../../css/v/vr57sgb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="kgy9pjbzm wm-deco"/><path class="i930grbpz wm-deco"/><path class="qa7s7w09v wm-deco"/><path class="wc2jrzf9o wm-k"/><path class="k-g31sewk wm-a"/><path class="vr57sgb0t wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chinese-knot-blueprint"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hbyi_obok.css';
import '../../css/b/b6acjm45t.css';
import '../../css/f/f6_0b0b7v.css';
import '../../css/m/mq3osobty.css';
import '../../css/n/nej6xhpny.css';
import '../../css/d/dp_gv7bnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hbyi_obok wm-deco"/><path class="b6acjm45t wm-deco"/><path class="f6_0b0b7v wm-deco"/><path class="mq3osobty wm-k"/><path class="nej6xhpny wm-a"/><path class="dp_gv7bnq wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thumbs-up-blueprint"} {...others} />);
}

export default Component;

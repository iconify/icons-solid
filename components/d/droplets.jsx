import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8lu04-uj.css';
import '../../css/k/km7tvib0h.css';
import '../../css/r/r10quwjuj.css';
import '../../css/s/s7x7s-b4e.css';
import '../../css/s/s0pur_btz.css';
import '../../css/t/tex1drr3n.css';
import '../../css/t/tkxg_zb9u.css';
import '../../css/q/q9izpo6sz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k x8lu04-uj"/><path class="km7tvib0h wm-k"/><path class="r10quwjuj wm-k"/><path class="s7x7s-b4e wm-shine"/><path class="s0pur_btz wm-a"/><path class="tex1drr3n wm-a"/><path class="tkxg_zb9u wm-a"/><path class="q9izpo6sz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:droplets"} {...others} />);
}

export default Component;

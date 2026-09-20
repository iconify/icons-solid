import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bpidkc-sw.css';
import '../../css/q/q9_l23jgm.css';
import '../../css/t/t8crdrb6d.css';
import '../../css/s/sw59iebvn.css';
import '../../css/k/kv2mmffvz.css';
import '../../css/l/l5mmmobwm.css';
import '../../css/r/r6o2vgbkq.css';
import '../../css/x/xt5pv7bxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bpidkc-sw"/><path class="q9_l23jgm"/><path class="t8crdrb6d"/><path class="sw59iebvn"/><path class="kv2mmffvz"/><path class="l5mmmobwm"/><path class="r6o2vgbkq"/><path class="xt5pv7bxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:saving-bank-1"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jgx7c6b3i.css';
import '../../css/h/hqs0-zb-z.css';
import '../../css/h/hqvt6xbdq.css';
import '../../css/u/uo_-zru1x.css';
import '../../css/i/iw6-a0jjm.css';
import '../../css/a/a4wsjx41f.css';
import '../../css/t/trzh4_k5d.css';
import '../../css/x/xeh6iwb2d.css';
import '../../css/v/vn9n4obyk.css';
import '../../css/m/mamj31z5h.css';
import '../../css/r/rl1rttwal.css';
import '../../css/e/edr5uwbay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jgx7c6b3i wm-shadow"/><path class="hqs0-zb-z"/><path class="hqvt6xbdq"/><path class="uo_-zru1x"/><path class="iw6-a0jjm"/><path class="a4wsjx41f"/><path class="trzh4_k5d"/><path class="wm-shine xeh6iwb2d"/><path class="vn9n4obyk wm-s"/><path class="mamj31z5h wm-s"/><path class="rl1rttwal wm-s"/><path class="edr5uwbay wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:pin-off"} {...others} />);
}

export default Component;

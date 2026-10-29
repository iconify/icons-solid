import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkovvsv-o.css';
import '../../css/p/prf1umqmd.css';
import '../../css/f/feqanpbty.css';
import '../../css/s/s4e15fj_f.css';
import '../../css/w/wc_q0ns4c.css';
import '../../css/u/uolfhgilm.css';
import '../../css/q/qjgo34ppu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tkovvsv-o wm-shadow"/><path class="prf1umqmd wm-k"/><path class="feqanpbty wm-k"/><path class="s4e15fj_f wm-k"/><path class="wc_q0ns4c wm-k"/><path class="uolfhgilm wm-k"/><path class="qjgo34ppu wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:cloud"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzajifbsy.css';
import '../../css/x/xyrgvc3-v.css';
import '../../css/o/obkmcxbii.css';
import '../../css/w/wf41scomo.css';
import '../../css/l/ld0bt_ber.css';
import '../../css/c/c4cuxccuz.css';
import '../../css/y/yo3x5tjys.css';
import '../../css/l/lyhjfxb4v.css';
import '../../css/z/z-n34kkmh.css';
import '../../css/a/ahxph4b9h.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/e/erszdz84p.css';
import '../../css/n/necd3bcbf.css';
import '../../css/k/k_4orwb-q.css';
import '../../css/q/qkgwgtbza.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lzajifbsy"/><path class="xyrgvc3-v"/><path class="obkmcxbii"/><path class="wf41scomo"/><circle class="ld0bt_ber"/><circle class="c4cuxccuz"/><circle class="yo3x5tjys"/><circle class="lyhjfxb4v"/><path class="z-n34kkmh"/><path class="ahxph4b9h"/><g class="rpvb-o6bq"><path class="erszdz84p"/><path class="necd3bcbf"/><path class="k_4orwb-q"/><path class="qkgwgtbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:diesel-locomotive"} {...others} />);
}

export default Component;

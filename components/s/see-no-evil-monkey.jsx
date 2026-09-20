import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz51pwb0e.css';
import '../../css/k/kmvzagbce.css';
import '../../css/g/gzakqqb3v.css';
import '../../css/g/gk1ka11gb.css';
import '../../css/q/qewc_riuv.css';
import '../../css/o/owe5hbbbl.css';
import '../../css/k/k9z_68bnq.css';
import '../../css/d/dx3pvubib.css';
import '../../css/h/hr0jvacqf.css';
import '../../css/v/vwyciebze.css';
import '../../css/w/wxmr7cbtt.css';
import '../../css/y/yd2s4v_ns.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="iz51pwb0e"/><path class="kmvzagbce"/><path class="gzakqqb3v"/><path class="gk1ka11gb"/><path class="qewc_riuv"/><path class="owe5hbbbl"/><path class="k9z_68bnq"/><path class="dx3pvubib"/><path class="hr0jvacqf"/><circle class="vwyciebze"/><circle class="wxmr7cbtt"/><path class="yd2s4v_ns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:see-no-evil-monkey"} {...others} />);
}

export default Component;

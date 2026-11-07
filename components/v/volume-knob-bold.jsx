import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i89m0ubbr.css';
import '../../css/i/isr_23fea.css';
import '../../css/l/lhqjkttpi.css';
import '../../css/v/v1kt_hbdn.css';
import '../../css/a/ahggenxib.css';
import '../../css/x/xriqzy4ev.css';
import '../../css/b/br28y0dtz.css';
import '../../css/e/e840iqbhy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i89m0ubbr"/><path class="isr_23fea"/><path class="lhqjkttpi"/><path class="v1kt_hbdn"/><path class="ahggenxib"/><path class="xriqzy4ev"/><path class="br28y0dtz"/><path class="e840iqbhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-knob-bold"} {...others} />);
}

export default Component;

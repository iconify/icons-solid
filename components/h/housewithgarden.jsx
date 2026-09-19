import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3ho2qbnk.css';
import '../../css/y/ysgos0byy.css';
import '../../css/w/wru064bdt.css';
import '../../css/x/x5va_dbaq.css';
import '../../css/m/mcq-blbei.css';
import '../../css/b/bnjwxob4s.css';
import '../../css/h/hwzmq_oes.css';
import '../../css/y/ywt3kjomc.css';
import '../../css/f/f2r89h29y.css';
import '../../css/s/sqm24tefl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z3ho2qbnk"/><path class="ysgos0byy"/><path class="wru064bdt"/><path class="x5va_dbaq"/><circle class="mcq-blbei"/><path class="bnjwxob4s"/><path class="hwzmq_oes"/><path class="ywt3kjomc"/><path class="f2r89h29y"/><path class="sqm24tefl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:housewithgarden"} {...others} />);
}

export default Component;

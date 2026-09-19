import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk_5h9bdo.css';
import '../../css/s/szy7_c_ir.css';
import '../../css/t/t1sbpacqn.css';
import '../../css/o/oagcisb-y.css';
import '../../css/o/oxqeoe2ek.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mk_5h9bdo"/><ellipse transform="rotate(-44.98 320.503 207.996)" class="szy7_c_ir"/><ellipse transform="rotate(-44.98 192.49 191.992)" class="t1sbpacqn"/><ellipse transform="rotate(-44.98 256.505 320)" class="oagcisb-y"/><path class="oxqeoe2ek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:pizza-sharp"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r11jctauv.css';
import '../../css/p/p8uuqvbra.css';
import '../../css/y/ykuulfbfo.css';
import '../../css/o/opjmhvbbr.css';
import '../../css/e/eudsns4zh.css';
import '../../css/h/hdkqq1hth.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted r11jctauv"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted p8uuqvbra"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted ykuulfbfo"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted opjmhvbbr"/><path class="clr-i-outline--alerted clr-i-outline-path-5--alerted eudsns4zh"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-6--alerted hdkqq1hth"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:users-outline-alerted"} {...others} />);
}

export default Component;

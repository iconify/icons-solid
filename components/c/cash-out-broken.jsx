import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dfqhfq-4w.css';
import '../../css/s/sxr9t17bs.css';
import '../../css/i/i-b1b9mbj.css';
import '../../css/m/mssc0fbma.css';
import '../../css/e/e8q-s-qwm.css';
import '../../css/o/o785odbyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dfqhfq-4w"/><path class="sxr9t17bs"/><path class="i-b1b9mbj"/><path class="mssc0fbma"/><path class="e8q-s-qwm"/><path class="o785odbyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cash-out-broken"} {...others} />);
}

export default Component;

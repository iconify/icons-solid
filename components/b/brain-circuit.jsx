import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/pnovrmbdo.css';
import '../../css/n/n2gwbw7yd.css';
import '../../css/e/eavvr_9wl.css';
import '../../css/a/ajxlmebul.css';
import '../../css/x/xb87-bbmt.css';
import '../../css/q/qljs69b-k.css';
import '../../css/l/ldojwibed.css';
import '../../css/u/ux1ai2iob.css';
import '../../css/o/o2lgwj5em.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="pnovrmbdo"/><path class="n2gwbw7yd"/><path class="eavvr_9wl"/><path class="ajxlmebul"/><path class="xb87-bbmt"/><path class="qljs69b-k"/><path class="ldojwibed"/><path class="ux1ai2iob"/><path class="o2lgwj5em"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:brain-circuit"} {...others} />);
}

export default Component;

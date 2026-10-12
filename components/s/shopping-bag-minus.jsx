import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kp_1wgb1c.css';
import '../../css/t/t6168-71n.css';
import '../../css/s/sx9r5_bwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kp_1wgb1c"/><path class="t6168-71n"/><path class="sx9r5_bwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shopping-bag-minus"} {...others} />);
}

export default Component;

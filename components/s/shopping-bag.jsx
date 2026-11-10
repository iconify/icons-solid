import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kp_1wgb1c.css';
import '../../css/o/oe_dinskv.css';
import '../../css/m/ml2j5ib2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kp_1wgb1c"/><path class="oe_dinskv"/><path class="ml2j5ib2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shopping-bag"} {...others} />);
}

export default Component;

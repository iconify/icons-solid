import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mo08gcb_w.css';
import '../../css/l/lbw9749uh.css';
import '../../css/o/o0ts0zbcs.css';
import '../../css/l/lzmyvgb2s.css';
import '../../css/k/kvicmu0no.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mo08gcb_w"/><path class="lbw9749uh"/><path class="o0ts0zbcs"/><path class="lzmyvgb2s"/><path class="kvicmu0no"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-line-duotone"} {...others} />);
}

export default Component;

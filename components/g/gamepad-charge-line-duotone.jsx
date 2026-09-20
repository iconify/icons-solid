import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dailtsmvb.css';
import '../../css/p/pkh3h622l.css';
import '../../css/c/chfv8st2f.css';
import '../../css/m/moxcymi3s.css';
import '../../css/c/ci9s2pb7v.css';
import '../../css/c/childjbrq.css';
import '../../css/y/yl5rcw6_j.css';
import '../../css/a/awhm0p1km.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dailtsmvb"/><path class="pkh3h622l"/><path class="chfv8st2f"/><path class="moxcymi3s"/><path class="ci9s2pb7v"/><path class="childjbrq"/><path class="yl5rcw6_j"/><path class="awhm0p1km"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-charge-line-duotone"} {...others} />);
}

export default Component;

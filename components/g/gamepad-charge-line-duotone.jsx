import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g9uxcsbqh.css';
import '../../css/p/pkh3h622l.css';
import '../../css/c/chfv8st2f.css';
import '../../css/m/macts57ml.css';
import '../../css/c/ci9s2pb7v.css';
import '../../css/c/childjbrq.css';
import '../../css/y/yl5rcw6_j.css';
import '../../css/a/awhm0p1km.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="g9uxcsbqh"/><path class="pkh3h622l"/><path class="chfv8st2f"/><path class="macts57ml"/><path class="ci9s2pb7v"/><path class="childjbrq"/><path class="yl5rcw6_j"/><path class="awhm0p1km"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-charge-line-duotone"} {...others} />);
}

export default Component;

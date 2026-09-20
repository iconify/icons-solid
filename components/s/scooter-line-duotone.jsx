import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g5wt_wbci.css';
import '../../css/x/xn-b0acce.css';
import '../../css/a/as2j2k52h.css';
import '../../css/m/m8rlb1beu.css';
import '../../css/w/wvon41boo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><rect class="g5wt_wbci"/><path class="xn-b0acce"/><path class="as2j2k52h"/><path class="m8rlb1beu"/><path class="wvon41boo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scooter-line-duotone"} {...others} />);
}

export default Component;

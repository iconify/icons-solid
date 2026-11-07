import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cwb91r7bm.css';
import '../../css/z/z-5dtelxe.css';
import '../../css/d/d0_8dmtbg.css';
import '../../css/f/f6a2dhcys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cwb91r7bm"/><path class="z-5dtelxe"/><path class="d0_8dmtbg"/><path class="f6a2dhcys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-broken"} {...others} />);
}

export default Component;

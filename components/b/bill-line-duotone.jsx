import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iusmblaqn.css';
import '../../css/t/tnf8gbb-i.css';
import '../../css/l/l8q853blz.css';
import '../../css/f/f6a2dhcys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iusmblaqn"/><path class="tnf8gbb-i"/><path class="l8q853blz"/><path class="f6a2dhcys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-line-duotone"} {...others} />);
}

export default Component;

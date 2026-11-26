import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xab6nwpco.css';
import '../../css/t/tev46ccry.css';
import '../../css/x/xmwhkynmn.css';
import '../../css/y/ywb-n3gue.css';
import '../../css/o/og7hnp50q.css';
import '../../css/d/dfiygn3oe.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGojPWwcXP" cx="78.7" cy="69.6" r="121.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="xab6nwpco"/><stop offset=".85" class="tev46ccry"/><stop offset="1" class="tev46ccry"/></radialGradient></defs><path class="xmwhkynmn"/><path fill="url(#SVGojPWwcXP)" transform="matrix(2.9 0 0 2.9 -31.156 -31.156)" class="ywb-n3gue"/><path class="og7hnp50q"/><path class="dfiygn3oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:plus"} {...others} />);
}

export default Component;

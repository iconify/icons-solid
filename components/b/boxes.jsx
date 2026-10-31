import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/k/kt3qm00dn.css';
import '../../css/s/sjaug-xik.css';
import '../../css/y/y3wowxbfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGfkHwweTu" x1="9" x2="15" y1="2.26" y2="21.34" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGfkHwweTu)" class="kt3qm00dn"/><path class="sjaug-xik wm-a"/><path class="wm-shine y3wowxbfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:boxes"} {...others} />);
}

export default Component;

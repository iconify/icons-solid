import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdleipbps.css';
import '../../css/c/cihx9hbnv.css';
import '../../css/x/x9_rd_f2j.css';
import '../../css/i/ibitabibt.css';
import '../../css/p/pwcd7rbyd.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG6ZjSNcNX" x1="325.414" x2="-128.986" y1="639.61" y2="-45.191" gradientTransform="translate(0 -279)" gradientUnits="userSpaceOnUse"><stop offset=".083" class="wdleipbps"/><stop offset=".452" class="cihx9hbnv"/><stop offset="1" class="x9_rd_f2j"/></linearGradient><path fill="url(#SVG6ZjSNcNX)" class="ibitabibt"/><path class="pwcd7rbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bar-assistant"} {...others} />);
}

export default Component;

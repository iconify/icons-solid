import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kl0-c8l3p.css';
import '../../css/v/vul88x5zh.css';
import '../../css/e/e28e5w85u.css';
import '../../css/i/i_5l7sllo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kl0-c8l3p"/><path class="vul88x5zh"/><linearGradient id="SVGdasV4cAu" x1="256.1" x2="256.1" y1="8.9" y2="505" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="e28e5w85u"/></linearGradient><path fill="url(#SVGdasV4cAu)" class="i_5l7sllo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:linuxgsm"} {...others} />);
}

export default Component;

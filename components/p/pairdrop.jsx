import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzdtuh_ya.css';
import '../../css/d/djsc_abcb.css';
import '../../css/g/gkcfldb9j.css';
import '../../css/g/gevok0bdf.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGL34muc6R" x1="1.3" x2="510.7" y1="403" y2="109" gradientUnits="userSpaceOnUse"><stop offset="0" class="mzdtuh_ya"/><stop offset="1" class="djsc_abcb"/></linearGradient><path fill="url(#SVGL34muc6R)" class="gkcfldb9j"/><path class="gevok0bdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pairdrop"} {...others} />);
}

export default Component;

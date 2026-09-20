import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izj-vh_uk.css';
import '../../css/v/vqnejwknn.css';
import '../../css/p/pga3n1bnt.css';
import '../../css/q/q18ui4bmd.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGeYPVkdWI" x1="-698.05" x2="-699.041" y1="795.023" y2="792.61" gradientTransform="matrix(195 0 0 -195 136479 155034)" gradientUnits="userSpaceOnUse"><stop offset="0" class="izj-vh_uk"/><stop offset="1" class="vqnejwknn"/></linearGradient><path fill="url(#SVGeYPVkdWI)" class="pga3n1bnt"/><path class="q18ui4bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:drivebase"} {...others} />);
}

export default Component;

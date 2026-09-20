import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmyld9xgb.css';
import '../../css/d/dr-orhelu.css';
import '../../css/o/o-5rj7b_s.css';
import '../../css/t/tfvgjrsvi.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGeObAIt1Z" x1="222.002" x2="259.955" y1="426.139" y2="65.038" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="wmyld9xgb"/><stop offset=".159" class="dr-orhelu"/><stop offset="1" class="o-5rj7b_s"/></linearGradient><path fill="url(#SVGeObAIt1Z)" class="tfvgjrsvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:antora"} {...others} />);
}

export default Component;

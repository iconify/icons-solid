import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d36_15eag.css';
import '../../css/o/ohl_j-ycf.css';
import '../../css/m/mki2icj0a.css';
import '../../css/s/sc312nbvu.css';
import '../../css/x/xz8wodbve.css';
import '../../css/t/tl9pbpbcc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d36_15eag"/><path class="ohl_j-ycf"/><linearGradient id="SVGaFGSDcUZ" x1="254.7" x2="256.8" y1="67.8" y2="426.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="mki2icj0a"/><stop offset="1" class="sc312nbvu"/></linearGradient><path fill="url(#SVGaFGSDcUZ)" class="xz8wodbve"/><path class="tl9pbpbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:whatsapp"} {...others} />);
}

export default Component;

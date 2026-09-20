import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqk8mibcy.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/i/isv5yaccv.css';
import '../../css/h/hcjkp5b_u.css';
import '../../css/b/b2g_cjgkw.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGhaZLmoMK" x1="469.999" x2="-563.675" y1="97.76" y2="905.989" gradientTransform="matrix(1 0 0 -1 10.48 529.28)" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset=".938" class="vc--wpv5i"/><stop offset="1" class="isv5yaccv"/></linearGradient><path fill="url(#SVGhaZLmoMK)" vector-effect="non-scaling-stroke" class="hcjkp5b_u"/><path class="b2g_cjgkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:maintainerr"} {...others} />);
}

export default Component;

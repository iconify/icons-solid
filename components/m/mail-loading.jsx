import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/i9fm37bpp.css';
import '../../css/y/y1zo2q6hp.css';
import '../../css/m/m643fwlbl.css';
import '../../css/t/trpnrd92m.css';
import '../../css/w/w_0d5gb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="i9fm37bpp"/><path class="y1zo2q6hp"/><path class="m643fwlbl"/><path class="trpnrd92m"/><path class="w_0d5gb2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:mail-loading"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nog5ftwkf.css';
import '../../css/t/tnljxhbrz.css';
import '../../css/l/lz7c3lbwd.css';
import '../../css/x/xz182l8_o.css';
import '../../css/o/oyil5ebeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nog5ftwkf"/><path class="tnljxhbrz"/><path class="lz7c3lbwd"/><path class="xz182l8_o"/><path class="oyil5ebeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-slider-2-broken"} {...others} />);
}

export default Component;

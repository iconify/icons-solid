import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m9lr-xbek.css';
import '../../css/n/nog5ftwkf.css';
import '../../css/t/tnljxhbrz.css';
import '../../css/c/ctsiybbva.css';
import '../../css/f/fpgelybpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m9lr-xbek"/><path class="nog5ftwkf"/><path class="tnljxhbrz"/><circle class="ctsiybbva"/><path class="fpgelybpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallpaper-linear"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yl_wwebaz.css';
import '../../css/d/dnsc_abpm.css';
import '../../css/w/wz3iusb6x.css';
import '../../css/z/zklek2tez.css';
import '../../css/t/t574z_bop.css';
import '../../css/z/zoclu7wtg.css';
import '../../css/o/o06sic7wt.css';
import '../../css/n/n93minbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yl_wwebaz"/><path class="dnsc_abpm"/><path class="wm-s wz3iusb6x"/><path class="wm-shine zklek2tez"/><path class="t574z_bop wm-k"/><path class="wm-a zoclu7wtg"/><path class="o06sic7wt wm-s"/><path class="n93minbmc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:reindeer"} {...others} />);
}

export default Component;

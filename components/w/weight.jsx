import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wgzulu_dc.css';
import '../../css/i/isc-82puh.css';
import '../../css/m/mio0oybsc.css';
import '../../css/k/kye5ot6dv.css';
import '../../css/o/oimp6g-4n.css';
import '../../css/v/v58hby3rh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wgzulu_dc wm-shadow"/><path class="isc-82puh"/><path class="mio0oybsc"/><path class="kye5ot6dv"/><path class="oimp6g-4n wm-shine"/><path class="v58hby3rh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:weight"} {...others} />);
}

export default Component;

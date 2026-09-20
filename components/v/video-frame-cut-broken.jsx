import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k2khccbcd.css';
import '../../css/j/jgmiltbod.css';
import '../../css/h/h14wliw7l.css';
import '../../css/v/voavs6b7i.css';
import '../../css/h/hxvp_dbba.css';
import '../../css/m/m5dtgkbek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k2khccbcd"/><path class="jgmiltbod"/><path class="h14wliw7l"/><path class="voavs6b7i"/><path class="hxvp_dbba"/><path class="m5dtgkbek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-cut-broken"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ar6plbklz.css';
import '../../css/t/tb121gpsz.css';
import '../../css/l/lt7_g7bom.css';
import '../../css/y/yncubmr0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ar6plbklz wm-k"/><path class="tb121gpsz wm-a"/><path class="lt7_g7bom wm-k"/><path class="wm-a yncubmr0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scale-sketch"} {...others} />);
}

export default Component;

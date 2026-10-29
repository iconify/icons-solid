import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yd-40xbpd.css';
import '../../css/g/gt4wshb-r.css';
import '../../css/b/bmi4u2bke.css';
import '../../css/l/lz3_99bxh.css';
import '../../css/r/rg78pebrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yd-40xbpd"/><path class="gt4wshb-r wm-a"/><path class="bmi4u2bke wm-k"/><path class="lz3_99bxh wm-a"/><path class="rg78pebrd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paisley-sketch"} {...others} />);
}

export default Component;

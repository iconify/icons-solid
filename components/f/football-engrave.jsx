import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g7v18jbnh.css';
import '../../css/l/la-m18b9m.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/m/m57h02oos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g7v18jbnh"/><path class="la-m18b9m wm-shadow"/><path class="yw4fz_b6b"/><path class="m57h02oos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:football-engrave"} {...others} />);
}

export default Component;

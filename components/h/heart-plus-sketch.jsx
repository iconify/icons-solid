import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g_3c4xboi.css';
import '../../css/t/t201aeb7o.css';
import '../../css/p/pymwtrb1e.css';
import '../../css/t/t_h-3qd1c.css';
import '../../css/v/vmrq-dbxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g_3c4xboi"/><path class="t201aeb7o wm-k"/><path class="pymwtrb1e wm-s"/><path class="t_h-3qd1c wm-k"/><path class="vmrq-dbxi wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-plus-sketch"} {...others} />);
}

export default Component;

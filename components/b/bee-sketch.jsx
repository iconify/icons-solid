import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/me6hq05dp.css';
import '../../css/h/hzh35zb_u.css';
import '../../css/d/df-t2ybaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="me6hq05dp"/><path class="hzh35zb_u wm-k"/><path class="df-t2ybaq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bee-sketch"} {...others} />);
}

export default Component;

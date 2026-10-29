import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uirmoybtc.css';
import '../../css/g/giv9t3b7u.css';
import '../../css/v/vq_hj5vyc.css';
import '../../css/b/bhooqk0tq.css';
import '../../css/q/qry8g136a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uirmoybtc"/><path class="giv9t3b7u wm-k"/><path class="vq_hj5vyc wm-a"/><path class="bhooqk0tq wm-k"/><path class="qry8g136a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cctv-sketch"} {...others} />);
}

export default Component;

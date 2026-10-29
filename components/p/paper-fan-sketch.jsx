import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mejzk5lgr.css';
import '../../css/r/ropvj0mrx.css';
import '../../css/h/h3koi8h_e.css';
import '../../css/i/iyajw1yez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mejzk5lgr wm-k"/><path class="ropvj0mrx wm-k"/><path class="h3koi8h_e wm-a"/><circle class="iyajw1yez wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paper-fan-sketch"} {...others} />);
}

export default Component;

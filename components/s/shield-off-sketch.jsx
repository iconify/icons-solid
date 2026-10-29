import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bkqxbnb8b.css';
import '../../css/u/usypnx0pj.css';
import '../../css/d/db_fcac8o.css';
import '../../css/j/jp-rqubck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bkqxbnb8b wm-k"/><path class="usypnx0pj wm-s"/><path class="db_fcac8o wm-k"/><path class="jp-rqubck wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-off-sketch"} {...others} />);
}

export default Component;

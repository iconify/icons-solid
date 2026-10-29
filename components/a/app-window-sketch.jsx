import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jtpswu7ak.css';
import '../../css/m/mvkcupbgs.css';
import '../../css/u/u_6g3bbkk.css';
import '../../css/c/caxef8g7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jtpswu7ak"/><path class="mvkcupbgs wm-k"/><path class="u_6g3bbkk wm-k"/><path class="caxef8g7p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:app-window-sketch"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/owpzfgb8d.css';
import '../../css/d/dsshy_bnq.css';
import '../../css/z/z0pihbb7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="owpzfgb8d wm-a"/><path class="dsshy_bnq wm-k"/><path class="wm-a z0pihbb7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bauble-sketch"} {...others} />);
}

export default Component;

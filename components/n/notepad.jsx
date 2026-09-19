import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/zoqhftbbw.css';
import '../../css/w/wo-g_51qx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="zoqhftbbw"/><path class="wo-g_51qx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:notepad"} {...others} />);
}

export default Component;

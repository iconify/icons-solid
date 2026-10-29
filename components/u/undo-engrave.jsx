import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ajbqyxbct.css';
import '../../css/v/vt6-ivbtd.css';
import '../../css/y/y47r9-bnz.css';
import '../../css/v/vwp9wpqdw.css';
import '../../css/r/r1uvmmr9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ajbqyxbct wm-k"/><path class="vt6-ivbtd wm-a"/><path class="wm-shadow y47r9-bnz"/><path class="vwp9wpqdw wm-k"/><path class="r1uvmmr9d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:undo-engrave"} {...others} />);
}

export default Component;

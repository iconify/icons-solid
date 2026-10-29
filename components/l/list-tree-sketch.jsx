import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c3brbdctz.css';
import '../../css/p/pgmcs8b1q.css';
import '../../css/x/xw4rj9ggz.css';
import '../../css/q/qzys12byp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c3brbdctz wm-k"/><path class="pgmcs8b1q wm-a"/><path class="wm-k xw4rj9ggz"/><path class="qzys12byp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-tree-sketch"} {...others} />);
}

export default Component;

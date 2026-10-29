import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q082x0big.css';
import '../../css/s/sdcxhgb1a.css';
import '../../css/y/y4hr1otxh.css';
import '../../css/n/nxd81s02k.css';
import '../../css/s/shk5hnb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="q082x0big"/><path class="sdcxhgb1a wm-k"/><path class="wm-a y4hr1otxh"/><path class="nxd81s02k wm-k"/><path class="shk5hnb7d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-square-plus-sketch"} {...others} />);
}

export default Component;

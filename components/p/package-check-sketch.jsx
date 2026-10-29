import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oz0pntz8k.css';
import '../../css/y/y4hoogz6u.css';
import '../../css/l/l_63p0bjf.css';
import '../../css/p/px0ye32eu.css';
import '../../css/w/wmj1ohbnx.css';
import '../../css/o/ojv09k0as.css';
import '../../css/n/ni_2etb8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="oz0pntz8k"/><path class="wm-k y4hoogz6u"/><path class="l_63p0bjf wm-a"/><path class="px0ye32eu wm-s"/><path class="wm-k wmj1ohbnx"/><path class="ojv09k0as wm-a"/><path class="ni_2etb8r wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-check-sketch"} {...others} />);
}

export default Component;

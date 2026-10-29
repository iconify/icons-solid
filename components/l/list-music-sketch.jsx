import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e92aedcqx.css';
import '../../css/x/xe2megdde.css';
import '../../css/u/ue6wgg4iq.css';
import '../../css/u/uuu5t1bgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e92aedcqx wm-k"/><path class="wm-a xe2megdde"/><path class="ue6wgg4iq wm-k"/><path class="uuu5t1bgf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-music-sketch"} {...others} />);
}

export default Component;

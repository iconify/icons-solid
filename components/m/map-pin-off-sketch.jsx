import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ysscyjbrs.css';
import '../../css/t/tw0eg5bdb.css';
import '../../css/z/z0vjpzhlp.css';
import '../../css/v/vmqgeoi8e.css';
import '../../css/z/za5p8abfc.css';
import '../../css/s/s45eup48w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k ysscyjbrs"/><path class="tw0eg5bdb wm-a"/><path class="wm-s z0vjpzhlp"/><path class="vmqgeoi8e wm-k"/><path class="wm-a za5p8abfc"/><path class="s45eup48w wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:map-pin-off-sketch"} {...others} />);
}

export default Component;

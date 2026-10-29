import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hwhho5byv.css';
import '../../css/i/i5h7uqh1e.css';
import '../../css/d/dauhxcish.css';
import '../../css/y/y836pq2wl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hwhho5byv"/><path class="i5h7uqh1e wm-a"/><path class="dauhxcish wm-k"/><path class="wm-a y836pq2wl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:help-circle-sketch"} {...others} />);
}

export default Component;

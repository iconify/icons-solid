import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lgreg-b0h.css';
import '../../css/t/tejekv0yd.css';
import '../../css/g/gp-44obuf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lgreg-b0h wm-k"/><path class="tejekv0yd wm-k"/><path class="gp-44obuf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crosshair-sketch"} {...others} />);
}

export default Component;

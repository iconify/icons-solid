import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rnabr02rn.css';
import '../../css/g/gi1cpjbgb.css';
import '../../css/f/f878cac8p.css';
import '../../css/l/ldpho9bqh.css';
import '../../css/p/p0qrfj54q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rnabr02rn wm-k"/><path class="gi1cpjbgb wm-k"/><path class="f878cac8p wm-k"/><path class="ldpho9bqh wm-a"/><path class="p0qrfj54q wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:credit-card-sketch"} {...others} />);
}

export default Component;

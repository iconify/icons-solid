import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qcx-5cbhr.css';
import '../../css/i/ir35abbrt.css';
import '../../css/c/ckng761oz.css';
import '../../css/j/jyibtv-4l.css';
import '../../css/w/w1azbvbkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qcx-5cbhr wm-k"/><path class="ir35abbrt wm-a"/><path class="ckng761oz wm-shadow"/><path class="jyibtv-4l wm-k"/><path class="w1azbvbkb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bike-engrave"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rqk7girfy.css';
import '../../css/x/x_lkbt59g.css';
import '../../css/x/xn_-dkzsn.css';
import '../../css/b/bp8ecnj5l.css';
import '../../css/h/hbi8hhkfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rqk7girfy wm-k"/><path class="wm-a x_lkbt59g"/><path class="wm-shadow xn_-dkzsn"/><path class="bp8ecnj5l wm-k"/><path class="hbi8hhkfx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:settings-engrave"} {...others} />);
}

export default Component;

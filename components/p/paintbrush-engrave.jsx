import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pzh4jacwq.css';
import '../../css/f/fey6353zj.css';
import '../../css/z/zlwfcob2u.css';
import '../../css/x/xr7tqnbdl.css';
import '../../css/z/zkgki1b_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pzh4jacwq wm-k"/><path class="fey6353zj wm-a"/><path class="wm-shadow zlwfcob2u"/><path class="wm-k xr7tqnbdl"/><path class="wm-k zkgki1b_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paintbrush-engrave"} {...others} />);
}

export default Component;

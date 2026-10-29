import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vbv8wjbrb.css';
import '../../css/t/tlcs2-_4r.css';
import '../../css/l/l4hu7nbyy.css';
import '../../css/u/u6qqhub_k.css';
import '../../css/f/f0o41_9yv.css';
import '../../css/v/vhbuf1vkf.css';
import '../../css/b/bn-zze-ur.css';
import '../../css/a/aqvhnvemy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vbv8wjbrb wm-k"/><path class="tlcs2-_4r wm-a"/><path class="l4hu7nbyy wm-s"/><path class="u6qqhub_k wm-shadow"/><path class="f0o41_9yv wm-k"/><path class="vhbuf1vkf wm-s"/><path class="bn-zze-ur wm-a"/><path class="aqvhnvemy wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-lock-engrave"} {...others} />);
}

export default Component;

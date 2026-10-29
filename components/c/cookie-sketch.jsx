import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tge36xbah.css';
import '../../css/p/pvql17bze.css';
import '../../css/k/kugyku2sr.css';
import '../../css/z/zvz-m9brs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tge36xbah"/><path class="pvql17bze"/><path class="kugyku2sr wm-k"/><path class="wm-a zvz-m9brs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cookie-sketch"} {...others} />);
}

export default Component;

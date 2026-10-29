import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xpn69tblh.css';
import '../../css/b/bi0a-7z0f.css';
import '../../css/x/xcyylac9e.css';
import '../../css/x/xbx3o24fa.css';
import '../../css/l/l51s4j92b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xpn69tblh"/><path class="bi0a-7z0f wm-a"/><path class="wm-shadow xcyylac9e"/><path class="wm-k xbx3o24fa"/><path class="l51s4j92b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pilcrow-engrave"} {...others} />);
}

export default Component;

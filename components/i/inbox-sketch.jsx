import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wap7p7b8n.css';
import '../../css/t/tmmytsbqr.css';
import '../../css/l/lj2drgb8a.css';
import '../../css/f/fjbh96but.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wap7p7b8n"/><path class="tmmytsbqr wm-k"/><path class="lj2drgb8a wm-k"/><path class="fjbh96but wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:inbox-sketch"} {...others} />);
}

export default Component;

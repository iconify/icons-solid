import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xc9kxsl1e.css';
import '../../css/z/z0l1z5b1x.css';
import '../../css/x/x4md61b4h.css';
import '../../css/q/q7ta1gemp.css';
import '../../css/z/zycozjbot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xc9kxsl1e"/><path class="wm-a z0l1z5b1x"/><path class="wm-k x4md61b4h"/><path class="q7ta1gemp wm-a"/><path class="wm-s zycozjbot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:jingle-bells-sketch"} {...others} />);
}

export default Component;

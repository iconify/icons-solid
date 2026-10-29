import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z0a5jss7d.css';
import '../../css/p/pth4efu1a.css';
import '../../css/x/x47drlpiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="z0a5jss7d"/><path class="pth4efu1a wm-k"/><path class="wm-a x47drlpiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-bar-sketch"} {...others} />);
}

export default Component;

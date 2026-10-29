import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kvce4pl-l.css';
import '../../css/x/xqh9rrg0g.css';
import '../../css/t/txsvwdb1u.css';
import '../../css/u/u1of9ltii.css';
import '../../css/n/ngurz8bhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kvce4pl-l wm-k"/><path class="wm-a xqh9rrg0g"/><path class="txsvwdb1u wm-shadow"/><path class="u1of9ltii wm-k"/><path class="ngurz8bhm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:move-engrave"} {...others} />);
}

export default Component;

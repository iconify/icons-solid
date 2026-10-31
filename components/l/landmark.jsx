import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/g/gu9qyrvmn.css';
import '../../css/j/jemvpobrw.css';
import '../../css/v/vnmcp-bbe.css';
import '../../css/w/w7gckfbed.css';
import '../../css/x/xbgl3_93f.css';
import '../../css/z/znkbnqogu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGgJw3l6ls" x1="10" x2="14" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="gu9qyrvmn wm-k"/><path class="jemvpobrw wm-a"/><path class="vnmcp-bbe wm-deco"/><path fill="url(#SVGgJw3l6ls)" class="w7gckfbed wm-k"/><path class="wm-a xbgl3_93f"/><path class="wm-shadow znkbnqogu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:landmark"} {...others} />);
}

export default Component;

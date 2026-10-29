import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n567acb4h.css';
import '../../css/l/ld1pw4e4y.css';
import '../../css/g/gp--w8j_x.css';
import '../../css/l/la1njcbhy.css';
import '../../css/w/wawkbcc0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n567acb4h wm-k"/><path class="ld1pw4e4y wm-a"/><path class="gp--w8j_x wm-shadow"/><path class="la1njcbhy wm-k"/><path class="wawkbcc0p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pencil-ruler-engrave"} {...others} />);
}

export default Component;

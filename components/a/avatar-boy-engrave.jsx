import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/spzl3f68r.css';
import '../../css/i/i0o3y5bln.css';
import '../../css/j/jfsu2ygwb.css';
import '../../css/b/bd9iuybie.css';
import '../../css/f/faaiuubbc.css';
import '../../css/r/ryfqb9b2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="spzl3f68r wm-k"/><path class="i0o3y5bln wm-a"/><path class="jfsu2ygwb wm-shadow"/><path class="bd9iuybie wm-k"/><path class="faaiuubbc wm-k"/><path class="ryfqb9b2g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-boy-engrave"} {...others} />);
}

export default Component;

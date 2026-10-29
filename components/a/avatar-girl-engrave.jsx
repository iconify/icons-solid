import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i9hp7acra.css';
import '../../css/c/cu1-3eo1h.css';
import '../../css/b/bd9iuybie.css';
import '../../css/f/faaiuubbc.css';
import '../../css/c/cc1cp5b9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i9hp7acra"/><path class="cu1-3eo1h wm-shadow"/><path class="bd9iuybie"/><path class="faaiuubbc"/><path class="cc1cp5b9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-girl-engrave"} {...others} />);
}

export default Component;

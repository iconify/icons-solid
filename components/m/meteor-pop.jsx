import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykg_cgbcp.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gj3t-zbqn.css';
import '../../css/e/ersep6bgh.css';
import '../../css/t/t4ydl1bio.css';
import '../../css/k/kz66y4ecm.css';
import '../../css/y/y2rfpqbcp.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="SVG5BoCvexl" width="49" height="49" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="ykg_cgbcp"/></mask><g mask="url(#SVG5BoCvexl)" class="ft5dv1b6b"><path class="gj3t-zbqn"/><path class="ersep6bgh"/><path class="t4ydl1bio"/><path class="kz66y4ecm"/><path class="y2rfpqbcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:meteor-pop"} {...others} />);
}

export default Component;

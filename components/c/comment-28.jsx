import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivxyifdjq.css';
import '../../css/f/fk3i-830m.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/n/npyhkyrja.css';

const viewBox = {"width":28,"height":28};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGPrl2yerC)" class="ivxyifdjq"/><defs><radialGradient id="SVGPrl2yerC" cx="0" cy="0" r="1" gradientTransform="rotate(48.418 2.781 -5.981)scale(43.376 78.5749)" gradientUnits="userSpaceOnUse"><stop class="fk3i-830m"/><stop offset=".535" class="h0zqot9pw"/><stop offset="1" class="npyhkyrja"/></radialGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:comment-28"} {...others} />);
}

export default Component;

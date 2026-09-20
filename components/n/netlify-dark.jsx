import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/o/odi669bij.css';
import '../../css/n/ntrj6wbus.css';
import '../../css/l/lc00ugj9n.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path fill="url(#SVGrL22Wceb)" class="odi669bij"/><defs><radialGradient id="SVGrL22Wceb" cx="0" cy="0" r="1" gradientTransform="matrix(0 199.78 -230.653 0 21.293 125.178)" gradientUnits="userSpaceOnUse"><stop class="ntrj6wbus"/><stop offset="1" class="lc00ugj9n"/></radialGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:netlify-dark"} {...others} />);
}

export default Component;

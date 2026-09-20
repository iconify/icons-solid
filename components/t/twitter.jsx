import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvl2anbys.css';
import '../../css/y/ydnq8obbc.css';
import '../../css/f/fx212mbag.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="pvl2anbys"/><rect class="ydnq8obbc"/><path class="fx212mbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:twitter"} {...others} />);
}

export default Component;

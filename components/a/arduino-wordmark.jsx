import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sto5bkbur.css';
import '../../css/s/sxiy_gize.css';
import '../../css/e/epswth33l.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="sto5bkbur"><path class="sxiy_gize"/><path class="epswth33l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:arduino-wordmark"} {...others} />);
}

export default Component;

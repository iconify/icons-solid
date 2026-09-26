import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yc1eq-awn.css';
import '../../css/v/vbwan82rd.css';
import '../../css/c/cofofbttk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yc1eq-awn"/><path class="vbwan82rd"/><path class="cofofbttk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-left-close-line-duotone"} {...others} />);
}

export default Component;

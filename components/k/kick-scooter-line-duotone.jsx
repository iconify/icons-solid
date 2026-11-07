import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f9qmqlbpl.css';
import '../../css/w/whchebbjm.css';
import '../../css/i/iyj-0ob5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f9qmqlbpl"/><path class="whchebbjm"/><path class="iyj-0ob5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:kick-scooter-line-duotone"} {...others} />);
}

export default Component;

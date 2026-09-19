import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dncd5rb1n.css';
import '../../css/i/iue80nb2y.css';
import '../../css/f/fky6n3bak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dncd5rb1n"/><path class="iue80nb2y"/><path class="fky6n3bak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:truck-length"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/np4lslbbr.css';
import '../../css/r/r4aenlbah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="np4lslbbr"/><path class="r4aenlbah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plane-line-duotone"} {...others} />);
}

export default Component;

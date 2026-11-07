import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o4bztxbcd.css';
import '../../css/w/w3kf-ubcm.css';
import '../../css/k/k-a-0dber.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o4bztxbcd"/><path class="w3kf-ubcm"/><path class="k-a-0dber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-opened-line-duotone"} {...others} />);
}

export default Component;

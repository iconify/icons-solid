import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/npxa2k15o.css';
import '../../css/h/hjc3-2vss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="npxa2k15o"/><path class="hjc3-2vss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-star-line-duotone"} {...others} />);
}

export default Component;

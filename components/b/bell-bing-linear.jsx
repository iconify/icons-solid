import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zxfji9bbi.css';
import '../../css/v/vjjx3rblu.css';
import '../../css/d/dv5-5hz_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zxfji9bbi"/><path class="vjjx3rblu"/><path class="dv5-5hz_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bell-bing-linear"} {...others} />);
}

export default Component;

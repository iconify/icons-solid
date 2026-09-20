import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dv5-5hz_c.css';
import '../../css/d/d049j6lem.css';
import '../../css/z/z5vrcx69y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dv5-5hz_c"/><path class="d049j6lem"/><path class="z5vrcx69y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bell-bing-broken"} {...others} />);
}

export default Component;

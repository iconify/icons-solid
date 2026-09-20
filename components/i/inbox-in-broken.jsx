import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/na411obky.css';
import '../../css/d/dmfni0bso.css';
import '../../css/w/wl_m8gbqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="na411obky"/><path class="dmfni0bso"/><path class="wl_m8gbqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-in-broken"} {...others} />);
}

export default Component;

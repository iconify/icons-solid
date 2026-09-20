import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w9wkd2b5z.css';
import '../../css/y/yncuteb8b.css';
import '../../css/m/msronwbal.css';
import '../../css/b/b26f9obxl.css';
import '../../css/p/p02ebtb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w9wkd2b5z"/><path class="yncuteb8b"/><path class="msronwbal"/><path class="b26f9obxl"/><path class="p02ebtb5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-3-broken"} {...others} />);
}

export default Component;

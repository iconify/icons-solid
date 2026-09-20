import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xjwylvpfw.css';
import '../../css/w/w9wkd2b5z.css';
import '../../css/y/yncuteb8b.css';
import '../../css/b/bqpt78r5r.css';
import '../../css/j/j_6w1fbre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xjwylvpfw"/><path class="w9wkd2b5z"/><path class="yncuteb8b"/><path class="bqpt78r5r"/><path class="j_6w1fbre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-3-line-duotone"} {...others} />);
}

export default Component;

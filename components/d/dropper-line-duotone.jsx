import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ik-3qexjt.css';
import '../../css/u/uhfh519di.css';
import '../../css/b/bqpt78r5r.css';
import '../../css/j/j_6w1fbre.css';
import '../../css/x/xjwylvpfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ik-3qexjt"/><path class="uhfh519di"/><path class="bqpt78r5r"/><path class="j_6w1fbre"/><path class="xjwylvpfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-line-duotone"} {...others} />);
}

export default Component;

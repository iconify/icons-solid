import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p3-348ccq.css';
import '../../css/g/gszbesbvo.css';
import '../../css/j/jvpt20bzs.css';
import '../../css/x/xtsqy_b-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p3-348ccq"/><path class="gszbesbvo"/><path class="jvpt20bzs"/><path class="xtsqy_b-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:share-circle-broken"} {...others} />);
}

export default Component;

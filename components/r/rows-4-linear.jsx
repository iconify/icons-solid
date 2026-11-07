import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/weddopsmh.css';
import '../../css/l/l4trkhdsa.css';
import '../../css/w/ws8s-nbqi.css';
import '../../css/c/cex3mhxbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="weddopsmh"/><path class="l4trkhdsa"/><path class="ws8s-nbqi"/><path class="cex3mhxbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rows-4-linear"} {...others} />);
}

export default Component;

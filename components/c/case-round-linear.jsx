import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jct4a2bzg.css';
import '../../css/k/kvdjm4bsr.css';
import '../../css/l/lb-mybcgs.css';
import '../../css/g/gzaisz9xh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jct4a2bzg"/><path class="kvdjm4bsr"/><path class="lb-mybcgs"/><path class="gzaisz9xh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-round-linear"} {...others} />);
}

export default Component;

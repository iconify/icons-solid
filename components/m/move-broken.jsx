import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mrobosv7g.css';
import '../../css/r/rlz5zkbxp.css';
import '../../css/i/ij7wzu9ga.css';
import '../../css/e/exvgqjc1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mrobosv7g"/><path class="rlz5zkbxp"/><path class="ij7wzu9ga"/><path class="exvgqjc1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-broken"} {...others} />);
}

export default Component;

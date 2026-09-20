import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uh8evbbul.css';
import '../../css/v/vv52kbcqz.css';
import '../../css/q/qq--gqc6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uh8evbbul"/><path class="vv52kbcqz"/><path class="qq--gqc6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-wave-linear"} {...others} />);
}

export default Component;

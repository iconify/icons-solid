import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hs8rvvlxb.css';
import '../../css/f/fu7ml01dv.css';
import '../../css/a/avvl2tizt.css';
import '../../css/s/sbmqfhzny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hs8rvvlxb"/><path class="fu7ml01dv"/><path class="avvl2tizt"/><path class="sbmqfhzny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ranking-line-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uxtlp1b8r.css';
import '../../css/w/w48o_g6he.css';
import '../../css/r/r3i1mebrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uxtlp1b8r"/><path class="w48o_g6he"/><path class="r3i1mebrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-2-linear"} {...others} />);
}

export default Component;

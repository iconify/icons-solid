import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ip3_c083h.css';
import '../../css/y/ymnh5s7qn.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/d-a-ltu6p.css';
import '../../css/q/qtmnxsb0t.css';
import '../../css/t/tmj_9mbwv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ip3_c083h"/><path class="ymnh5s7qn"/><g class="ij2x_72vy"><path class="d-a-ltu6p"/><path class="qtmnxsb0t"/><path class="tmj_9mbwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rhinoceros"} {...others} />);
}

export default Component;

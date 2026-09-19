import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ypvy0yenq.css';
import '../../css/n/nd0nr62we.css';
import '../../css/r/ry1_b0b_x.css';
import '../../css/f/f5eutvbbl.css';
import '../../css/l/l1wdx4b2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ypvy0yenq"/><path class="nd0nr62we"/><path class="ry1_b0b_x"/><path class="f5eutvbbl"/><path class="l1wdx4b2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:litecoin-rotate-out"} {...others} />);
}

export default Component;

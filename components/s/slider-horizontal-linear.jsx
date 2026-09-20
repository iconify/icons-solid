import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tke-0za-g.css';
import '../../css/t/ten2dqbwx.css';
import '../../css/o/oockgugaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tke-0za-g"/><path class="ten2dqbwx"/><path class="oockgugaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-horizontal-linear"} {...others} />);
}

export default Component;

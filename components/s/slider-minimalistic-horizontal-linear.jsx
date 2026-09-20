import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tke-0za-g.css';
import '../../css/j/jmv52wbro.css';
import '../../css/r/r7ipq5s-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tke-0za-g"/><path class="jmv52wbro"/><path class="r7ipq5s-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-minimalistic-horizontal-linear"} {...others} />);
}

export default Component;

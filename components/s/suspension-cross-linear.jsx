import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j601zwbbx.css';
import '../../css/e/eupf27bpo.css';
import '../../css/i/iredkutyw.css';
import '../../css/w/wtl2pobdd.css';
import '../../css/p/psheptbge.css';
import '../../css/p/p486gvbkz.css';
import '../../css/c/cnz701bcw.css';
import '../../css/t/tcmb89bxl.css';
import '../../css/r/r81c58q3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j601zwbbx"/><path class="eupf27bpo"/><path class="iredkutyw"/><path class="wtl2pobdd"/><path class="psheptbge"/><path class="p486gvbkz"/><path class="cnz701bcw"/><path class="tcmb89bxl"/><path class="r81c58q3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suspension-cross-linear"} {...others} />);
}

export default Component;

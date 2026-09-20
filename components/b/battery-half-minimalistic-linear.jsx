import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dw3gp6vcm.css';
import '../../css/n/na80fjbih.css';
import '../../css/b/by8lpqc5r.css';
import '../../css/t/tnfby2q5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dw3gp6vcm"/><path class="na80fjbih"/><path class="by8lpqc5r"/><path class="tnfby2q5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-half-minimalistic-linear"} {...others} />);
}

export default Component;

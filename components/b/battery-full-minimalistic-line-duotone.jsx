import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/loam-qbtt.css';
import '../../css/t/tnfby2q5d.css';
import '../../css/n/na80fjbih.css';
import '../../css/b/by8lpqc5r.css';
import '../../css/p/p6o9-vebo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="loam-qbtt"/><path class="tnfby2q5d"/><path class="na80fjbih"/><path class="by8lpqc5r"/><path class="p6o9-vebo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-full-minimalistic-line-duotone"} {...others} />);
}

export default Component;

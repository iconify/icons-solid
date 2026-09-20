import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lghfbwbad.css';
import '../../css/p/pnx-7hdbe.css';
import '../../css/r/r-fwg-bgp.css';
import '../../css/p/ppqxdzqbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lghfbwbad"/><path class="pnx-7hdbe"/><path class="r-fwg-bgp"/><path class="ppqxdzqbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-from-bottom-to-top-line-duotone"} {...others} />);
}

export default Component;

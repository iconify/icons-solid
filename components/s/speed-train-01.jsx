import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t8ru5zfjb.css';
import '../../css/w/w3_-hqrjv.css';
import '../../css/x/xvy9ibcic.css';
import '../../css/z/z9ittvbis.css';
import '../../css/o/o4c4ve50q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t8ru5zfjb"/><path class="w3_-hqrjv"/><path class="xvy9ibcic"/><path class="z9ittvbis"/><path class="o4c4ve50q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:speed-train-01"} {...others} />);
}

export default Component;

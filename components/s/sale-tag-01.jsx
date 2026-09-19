import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a07s13bxo.css';
import '../../css/q/qc1ru30_a.css';
import '../../css/s/sk8x0nbms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a07s13bxo"/><path class="qc1ru30_a"/><path class="sk8x0nbms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sale-tag-01"} {...others} />);
}

export default Component;

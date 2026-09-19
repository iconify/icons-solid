import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iz8_ibc7z.css';
import '../../css/r/rvab0qf4b.css';
import '../../css/v/v7_qmpb8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iz8_ibc7z"/><path class="rvab0qf4b"/><path class="v7_qmpb8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-average"} {...others} />);
}

export default Component;

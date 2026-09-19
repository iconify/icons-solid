import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c_kplcszs.css';
import '../../css/v/vfymv3unk.css';
import '../../css/q/qsz9j-v2y.css';
import '../../css/t/td1hxgbap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c_kplcszs"/><path class="vfymv3unk"/><path class="qsz9j-v2y"/><path class="td1hxgbap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:monster"} {...others} />);
}

export default Component;

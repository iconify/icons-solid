import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t8n2fmv3x.css';
import '../../css/k/kw_evg14q.css';
import '../../css/t/tpurk853y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t8n2fmv3x"/><path class="kw_evg14q"/><path class="tpurk853y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:restore-bin"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8sr0bcyc.css';
import '../../css/a/ajhwufbzx.css';
import '../../css/s/s7w85u64u.css';
import '../../css/q/qg1h5kb5o.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e8sr0bcyc"/><path class="ajhwufbzx"/><path class="s7w85u64u"/><path class="qg1h5kb5o"/><path class="zr35ecbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-chart-line-duotone"} {...others} />);
}

export default Component;

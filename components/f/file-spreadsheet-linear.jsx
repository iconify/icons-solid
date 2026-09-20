import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nahi2pb-d.css';
import '../../css/d/d4-wn8r2x.css';
import '../../css/n/nrb_khbyp.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nahi2pb-d"/><path class="d4-wn8r2x"/><path class="nrb_khbyp"/><path class="e0cmz0boh"/><path class="zr35ecbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-spreadsheet-linear"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8sr0bcyc.css';
import '../../css/e/e1bgqhbiz.css';
import '../../css/h/hedo-tb6v.css';
import '../../css/m/mqyo1zlrk.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e8sr0bcyc"/><path class="e1bgqhbiz"/><path class="hedo-tb6v"/><circle class="mqyo1zlrk"/><path class="zr35ecbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-signal-line-duotone"} {...others} />);
}

export default Component;

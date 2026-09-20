import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-e2_lmrw.css';
import '../../css/n/n1_ykhn3f.css';
import '../../css/d/d20-0wyrx.css';
import '../../css/p/pq0e-etnf.css';
import '../../css/a/a0l-fdc8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f-e2_lmrw"/><path class="n1_ykhn3f"/><path class="d20-0wyrx"/><path class="pq0e-etnf"/><path class="a0l-fdc8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-verified-linear"} {...others} />);
}

export default Component;

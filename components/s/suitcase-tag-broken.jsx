import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/m/mxvnuacok.css';
import '../../css/k/klode0b5x.css';
import '../../css/q/q1gbbksae.css';
import '../../css/p/pybti58qc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hq-5njbjh"/><path class="mxvnuacok"/><path class="klode0b5x"/><path class="q1gbbksae"/><path class="pybti58qc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suitcase-tag-broken"} {...others} />);
}

export default Component;

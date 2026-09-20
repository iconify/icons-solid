import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_lejeueo.css';
import '../../css/k/kk80kc5ca.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/a4t5l_bes.css';
import '../../css/q/qjy-lhbwx.css';
import '../../css/n/n10vw1wtt.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="m_lejeueo"/><path class="kk80kc5ca"/><g class="ij2x_72vy"><path class="a4t5l_bes"/><path class="qjy-lhbwx"/><path class="n10vw1wtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:zebra"} {...others} />);
}

export default Component;

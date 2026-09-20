import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/h/hme959bub.css';
import '../../css/w/w6ca74b2j.css';
import '../../css/s/smls78shz.css';
import '../../css/n/nau4w8dar.css';
import '../../css/n/n787bfb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xl-jlp1rp"/><path class="hme959bub"/><path class="w6ca74b2j"/><path class="smls78shz"/><path class="nau4w8dar"/><path class="n787bfb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radio-linear"} {...others} />);
}

export default Component;

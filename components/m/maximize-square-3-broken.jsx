import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wn1mmp0fq.css';
import '../../css/h/hb6t3lb4p.css';
import '../../css/y/yqghi_b_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wn1mmp0fq"/><path class="hb6t3lb4p"/><path class="yqghi_b_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:maximize-square-3-broken"} {...others} />);
}

export default Component;

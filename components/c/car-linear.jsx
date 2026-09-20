import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a0pcr2bht.css';
import '../../css/c/cx5-x2bsy.css';
import '../../css/w/wyu6dlbwx.css';
import '../../css/x/xbpaam-ee.css';
import '../../css/q/qvlkt9duy.css';
import '../../css/y/ybgk0--2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a0pcr2bht"/><path class="cx5-x2bsy"/><path class="wyu6dlbwx"/><path class="xbpaam-ee"/><path class="qvlkt9duy"/><path class="ybgk0--2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:car-linear"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vckmfeq5c.css';
import '../../css/i/i2q3oaceu.css';
import '../../css/w/wvwojyb1o.css';
import '../../css/c/c20zxwbse.css';
import '../../css/q/qicxzyeyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vckmfeq5c"/><path class="i2q3oaceu"/><path class="wvwojyb1o"/><path class="c20zxwbse"/><path class="qicxzyeyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-square-linear"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q3_w0cblj.css';
import '../../css/u/uaiu8_3kx.css';
import '../../css/x/xiz9lomik.css';
import '../../css/t/t4qaumccy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="q3_w0cblj"/><path class="uaiu8_3kx"/><path class="xiz9lomik"/><path class="t4qaumccy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-audio-broken"} {...others} />);
}

export default Component;

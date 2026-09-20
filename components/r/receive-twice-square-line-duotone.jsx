import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/slo5fwl1o.css';
import '../../css/y/yf7lmww2l.css';
import '../../css/a/acenjrbbz.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="slo5fwl1o"/><path class="yf7lmww2l"/><path class="acenjrbbz"/><path class="wf89k6buf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:receive-twice-square-line-duotone"} {...others} />);
}

export default Component;

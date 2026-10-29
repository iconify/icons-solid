import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/etlx3qbwc.css';
import '../../css/x/xfcab7bto.css';
import '../../css/l/l7umh3bwe.css';
import '../../css/n/nj6yhupln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="etlx3qbwc wm-k"/><path class="wm-shadow xfcab7bto"/><path class="l7umh3bwe wm-k"/><path class="nj6yhupln wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calculator-engrave"} {...others} />);
}

export default Component;

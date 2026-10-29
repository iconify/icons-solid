import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wmiiyybyy.css';
import '../../css/i/ikidij4md.css';
import '../../css/f/fqyx1zd_r.css';
import '../../css/p/psqpflbbk.css';
import '../../css/w/wbezozb6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wmiiyybyy"/><path class="ikidij4md wm-k"/><path class="fqyx1zd_r wm-a"/><path class="psqpflbbk wm-k"/><path class="wbezozb6y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pencil-sketch"} {...others} />);
}

export default Component;

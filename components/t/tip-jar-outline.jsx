import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/aqtyesbwn.css';
import '../../css/q/qr90g_bcv.css';
import '../../css/e/ewsav27ph.css';
import '../../css/f/fago-0h9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="aqtyesbwn"/><path class="qr90g_bcv"/><circle class="ewsav27ph"/><path class="fago-0h9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:tip-jar-outline"} {...others} />);
}

export default Component;

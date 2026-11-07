import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/v/vncs1mbed.css';
import '../../css/d/d5oleed0c.css';
import '../../css/o/oyfge7bbq.css';
import '../../css/s/smner8-3c.css';
import '../../css/j/jrof3sbiu.css';
import '../../css/x/xiwqv5b8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="vncs1mbed"/><path class="d5oleed0c"/><path class="oyfge7bbq"/><path class="smner8-3c"/><path class="jrof3sbiu"/><path class="xiwqv5b8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-play-horizontal-linear"} {...others} />);
}

export default Component;

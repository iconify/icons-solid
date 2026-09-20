import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mq7e69b8f.css';
import '../../css/y/yaruyvhce.css';
import '../../css/p/phe_8zyug.css';
import '../../css/m/mjpgwnjdp.css';
import '../../css/w/w6oifud7o.css';
import '../../css/e/e8g3t8bep.css';
import '../../css/t/tz-9lu7gl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mq7e69b8f"/><path class="yaruyvhce"/><path class="phe_8zyug"/><path class="mjpgwnjdp"/><path class="w6oifud7o"/><path class="e8g3t8bep"/><path class="tz-9lu7gl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:iris-scan-1"} {...others} />);
}

export default Component;

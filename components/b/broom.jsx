import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vexjd-bui.css';
import '../../css/m/mgcch2bhp.css';
import '../../css/g/glwttfh9b.css';
import '../../css/s/skz5gdcaj.css';
import '../../css/a/a_13ezbel.css';
import '../../css/q/qo5y2vb4n.css';
import '../../css/x/xjjmy0ecz.css';
import '../../css/h/h72w7zroa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vexjd-bui wm-a"/><path class="mgcch2bhp wm-a"/><path class="glwttfh9b wm-a"/><path class="skz5gdcaj wm-k"/><path class="a_13ezbel wm-k"/><path class="qo5y2vb4n wm-k"/><path class="wm-shine xjjmy0ecz"/><path class="h72w7zroa wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:broom"} {...others} />);
}

export default Component;

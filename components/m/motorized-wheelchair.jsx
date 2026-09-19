import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ndsex-lgc.css';
import '../../css/z/zrt_po7xs.css';
import '../../css/h/h_ybyqkmh.css';
import '../../css/m/maz-y_lyl.css';
import '../../css/v/v-044n2sb.css';
import '../../css/m/mdn92udrw.css';
import '../../css/a/apdif_t4s.css';
import '../../css/s/s0i8hacue.css';
import '../../css/n/n5qjn6bgb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ndsex-lgc"/><path class="zrt_po7xs"/><path class="h_ybyqkmh"/><path class="maz-y_lyl"/><path class="v-044n2sb"/><path class="mdn92udrw"/><path class="apdif_t4s"/><path class="s0i8hacue"/><path class="n5qjn6bgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:motorized-wheelchair"} {...others} />);
}

export default Component;

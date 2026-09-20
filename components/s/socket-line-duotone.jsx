import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wf89k6buf.css';
import '../../css/v/v90gbqbox.css';
import '../../css/x/xkaodm3_u.css';
import '../../css/q/q-i_e5brw.css';
import '../../css/s/s6le__b7v.css';
import '../../css/w/wf-yddc_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wf89k6buf"/><circle class="v90gbqbox"/><path class="xkaodm3_u"/><path class="q-i_e5brw"/><path class="s6le__b7v"/><path class="wf-yddc_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:socket-line-duotone"} {...others} />);
}

export default Component;

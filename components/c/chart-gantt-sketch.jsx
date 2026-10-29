import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ui-h4lkhg.css';
import '../../css/d/dmrwy4buz.css';
import '../../css/h/hwksmab1d.css';
import '../../css/m/mclry9-jv.css';
import '../../css/d/djj1_0nws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ui-h4lkhg"/><path class="dmrwy4buz wm-k"/><path class="hwksmab1d wm-k"/><path class="mclry9-jv wm-a"/><path class="djj1_0nws wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-gantt-sketch"} {...others} />);
}

export default Component;

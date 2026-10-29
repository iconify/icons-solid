import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m3dedbbyn.css';
import '../../css/o/ods51qbhy.css';
import '../../css/x/x2chrcbtq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="m3dedbbyn"/><path class="ods51qbhy wm-k"/><path class="wm-a x2chrcbtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:donut-sketch"} {...others} />);
}

export default Component;

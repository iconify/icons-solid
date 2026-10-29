import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qjgdbowmx.css';
import '../../css/g/gvws9nb5q.css';
import '../../css/o/oxv1zccrk.css';
import '../../css/o/owa8_zbgh.css';
import '../../css/q/q2bjfsbys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qjgdbowmx wm-k"/><path class="gvws9nb5q wm-a"/><path class="oxv1zccrk wm-k"/><path class="owa8_zbgh wm-a"/><path class="q2bjfsbys wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:christmas-candle-sketch"} {...others} />);
}

export default Component;

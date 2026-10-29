import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vx38fwboo.css';
import '../../css/r/razttccmb.css';
import '../../css/i/iib7mbbta.css';
import '../../css/q/qox4_50ly.css';
import '../../css/w/w4anm-a-o.css';
import '../../css/h/h4iwvoacx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vx38fwboo wm-k"/><path class="razttccmb wm-k"/><path class="iib7mbbta wm-k"/><path class="qox4_50ly wm-k"/><path class="w4anm-a-o wm-shine"/><path class="h4iwvoacx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:receipt-text"} {...others} />);
}

export default Component;

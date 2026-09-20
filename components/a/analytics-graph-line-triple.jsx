import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1pxt3bbp.css';
import '../../css/m/mnaoluazb.css';
import '../../css/p/pjhepfsat.css';
import '../../css/x/xhxn38b-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q1pxt3bbp"/><path class="mnaoluazb"/><path class="pjhepfsat"/><path class="xhxn38b-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:analytics-graph-line-triple"} {...others} />);
}

export default Component;

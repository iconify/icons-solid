import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/io08ocb_q.css';
import '../../css/m/m4h938btx.css';
import '../../css/w/wvsudvexh.css';
import '../../css/r/ruvg_u9dg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="io08ocb_q"/><path class="m4h938btx"/><path class="wvsudvexh"/><path class="ruvg_u9dg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:car-battery-charging"} {...others} />);
}

export default Component;

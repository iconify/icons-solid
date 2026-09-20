import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q9sy-eb5q.css';
import '../../css/b/beg61_b1x.css';
import '../../css/v/vg4-x780p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="q9sy-eb5q"/><path class="beg61_b1x"/><path class="vg4-x780p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:vpn-connection"} {...others} />);
}

export default Component;

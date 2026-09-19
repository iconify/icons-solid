import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u-8x99uis.css';
import '../../css/h/h10cebcqu.css';
import '../../css/n/nptw7vb_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u-8x99uis"/><path class="h10cebcqu"/><path class="nptw7vb_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:board-math"} {...others} />);
}

export default Component;

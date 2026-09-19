import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qm9zmwesg.css';
import '../../css/b/btkw-59hw.css';
import '../../css/c/ck4bgcbho.css';
import '../../css/f/f_-5s2tne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="qm9zmwesg"/><path class="btkw-59hw"/><path class="ck4bgcbho"/><path class="f_-5s2tne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-down"} {...others} />);
}

export default Component;

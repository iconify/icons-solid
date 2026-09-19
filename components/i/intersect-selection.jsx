import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ihrkb6bvf.css';
import '../../css/c/c12_yhz0x.css';
import '../../css/x/xkltt4jvh.css';
import '../../css/p/pde-jra6z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="ihrkb6bvf"/><rect class="c12_yhz0x"/><path class="xkltt4jvh"/><path class="pde-jra6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:intersect-selection"} {...others} />);
}

export default Component;

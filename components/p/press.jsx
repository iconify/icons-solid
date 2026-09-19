import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vxzkcsb0e.css';
import '../../css/a/admoqab7f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vxzkcsb0e"/><path class="admoqab7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:press"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti4q6eknm.css';
import '../../css/k/ksh1jl82n.css';
import '../../css/d/dm_j5gglv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ti4q6eknm"><path class="ksh1jl82n"/><path class="dm_j5gglv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:weightlifting"} {...others} />);
}

export default Component;

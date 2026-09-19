import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti4q6eknm.css';
import '../../css/q/qyrg7rbnv.css';
import '../../css/d/dm_j5gglv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ti4q6eknm"><path class="qyrg7rbnv"/><path class="dm_j5gglv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:weightlifting"} {...others} />);
}

export default Component;

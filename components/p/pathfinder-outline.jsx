import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/cwqjm44fp.css';
import '../../css/y/ycykn3dsh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="cwqjm44fp"/><path class="ycykn3dsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pathfinder-outline"} {...others} />);
}

export default Component;

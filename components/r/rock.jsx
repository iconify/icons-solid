import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hk84_suzy.css';
import '../../css/k/ktbtm7bpy.css';
import '../../css/x/xc2kklq7i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hk84_suzy"/><path class="ktbtm7bpy"/><path class="xc2kklq7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rock"} {...others} />);
}

export default Component;

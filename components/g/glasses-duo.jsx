import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ykbbngpem.css';
import '../../css/g/g504dtw0m.css';
import '../../css/e/espoz0bpy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ykbbngpem"/><path class="g504dtw0m"/><path class="espoz0bpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:glasses-duo"} {...others} />);
}

export default Component;

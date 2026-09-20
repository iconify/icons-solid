import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dq78s-tqz.css';
import '../../css/h/h08_36bgu.css';
import '../../css/m/mn2c98bpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dq78s-tqz"/><path class="h08_36bgu"/><path class="mn2c98bpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:module-hands-puzzle"} {...others} />);
}

export default Component;

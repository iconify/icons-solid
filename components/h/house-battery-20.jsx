import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbx5zccce.css';
import '../../css/u/uu578rb0y.css';
import '../../css/a/abch41bnj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fbx5zccce"/><path class="uu578rb0y"/><path class="abch41bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-battery-20"} {...others} />);
}

export default Component;

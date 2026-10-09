import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbx5zccce.css';
import '../../css/z/zrqlkvb4c.css';
import '../../css/w/w-8r-b8kp.css';
import '../../css/t/tna6zhb3s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fbx5zccce"/><path class="zrqlkvb4c"/><path class="w-8r-b8kp"/><path class="tna6zhb3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-snowflake-20"} {...others} />);
}

export default Component;

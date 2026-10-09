import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbx5zccce.css';
import '../../css/d/dclfrbcuw.css';
import '../../css/e/e9nmf_btt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fbx5zccce"/><path class="dclfrbcuw"/><path class="e9nmf_btt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-heat-pump-20"} {...others} />);
}

export default Component;

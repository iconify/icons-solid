import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbx5zccce.css';
import '../../css/b/bj_kui57y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fbx5zccce"/><path class="bj_kui57y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:insulation-20"} {...others} />);
}

export default Component;

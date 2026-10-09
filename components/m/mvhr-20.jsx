import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbx5zccce.css';
import '../../css/h/ht2w2gbct.css';
import '../../css/i/ip_kbyb2f.css';
import '../../css/i/iqyfmrbeb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fbx5zccce"/><path class="ht2w2gbct"/><path class="ip_kbyb2f"/><path class="iqyfmrbeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mvhr-20"} {...others} />);
}

export default Component;

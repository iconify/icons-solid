import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nost1bbvh.css';
import '../../css/z/zpfkve_xq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nost1bbvh"/><path class="zpfkve_xq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ufh-manifold-20-bold"} {...others} />);
}

export default Component;

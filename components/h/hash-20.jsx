import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq0_hgb3f.css';
import '../../css/v/vxl90jbvh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kq0_hgb3f"/><path class="vxl90jbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hash-20"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf_0_vbwb.css';
import '../../css/p/pxc5p1dyz.css';
import '../../css/n/ng4ifmbhf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xf_0_vbwb"/><path class="pxc5p1dyz"/><path class="ng4ifmbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compost-20-bold"} {...others} />);
}

export default Component;

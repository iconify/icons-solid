import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz2mse9qz.css';
import '../../css/p/ph-b_-uai.css';
import '../../css/q/qdx0s-b4s.css';
import '../../css/x/x3x22ib9v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uz2mse9qz"/><path class="ph-b_-uai"/><path class="qdx0s-b4s"/><path class="x3x22ib9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soil-20"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k559q8bag.css';
import '../../css/z/zzchhccef.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k559q8bag"/><path class="zzchhccef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:conveyor-20"} {...others} />);
}

export default Component;

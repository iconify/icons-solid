import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qho2-b78i.css';
import '../../css/c/cu2uiexyf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qho2-b78i"/><path class="cu2uiexyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-network-20-bold"} {...others} />);
}

export default Component;

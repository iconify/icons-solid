import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt_i27b9p.css';
import '../../css/s/s60hnq-cg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mt_i27b9p"/><path class="s60hnq-cg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wrench-20"} {...others} />);
}

export default Component;

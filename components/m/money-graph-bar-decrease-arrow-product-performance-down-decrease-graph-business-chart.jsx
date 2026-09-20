import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vs6j3rbvp.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="vs6j3rbvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-graph-bar-decrease-arrow-product-performance-down-decrease-graph-business-chart"} {...others} />);
}

export default Component;

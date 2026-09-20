import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv_rmbk8d.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zv_rmbk8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart"} {...others} />);
}

export default Component;

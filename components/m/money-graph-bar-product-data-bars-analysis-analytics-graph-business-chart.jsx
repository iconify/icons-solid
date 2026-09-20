import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/po7q84-3d.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="po7q84-3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-graph-bar-product-data-bars-analysis-analytics-graph-business-chart"} {...others} />);
}

export default Component;

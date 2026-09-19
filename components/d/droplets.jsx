import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/ogt7h3bjy.css';
import '../../css/e/eu2jph4ne.css';
import '../../css/y/ys0g5f80g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ogt7h3bjy"/><path class="eu2jph4ne"/><path class="ys0g5f80g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:droplets"} {...others} />);
}

export default Component;

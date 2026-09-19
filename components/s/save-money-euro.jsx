import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pvpjlb97s.css';
import '../../css/x/xrdxaeb5q.css';
import '../../css/j/j7k2ckmjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pvpjlb97s"/><path class="xrdxaeb5q"/><path class="j7k2ckmjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:save-money-euro"} {...others} />);
}

export default Component;

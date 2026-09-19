import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/lbnlx0bxj.css';
import '../../css/a/ai46_xhvw.css';
import '../../css/w/wvthsnzpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="lbnlx0bxj"/><path class="ai46_xhvw"/><path class="wvthsnzpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-chemistry-01"} {...others} />);
}

export default Component;

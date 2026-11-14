import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l51hm_byx.css';
import '../../css/p/p46zohbfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="l51hm_byx"/><path class="p46zohbfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:repair"} {...others} />);
}

export default Component;

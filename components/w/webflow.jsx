import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/e350e3bqm.css';
import '../../css/p/p8zmkzxbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="e350e3bqm"/><path class="p8zmkzxbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:webflow"} {...others} />);
}

export default Component;

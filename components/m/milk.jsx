import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/j7ziy6efr.css';
import '../../css/w/w5pb9bi0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="j7ziy6efr"/><path class="w5pb9bi0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:milk"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/j_-iwmrza.css';
import '../../css/x/xhx0r7bth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="j_-iwmrza"/><path class="xhx0r7bth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:trending-down"} {...others} />);
}

export default Component;

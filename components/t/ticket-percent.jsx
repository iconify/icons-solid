import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/o4p69eghh.css';
import '../../css/e/e16z-6bec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="o4p69eghh"/><path class="e16z-6bec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ticket-percent"} {...others} />);
}

export default Component;

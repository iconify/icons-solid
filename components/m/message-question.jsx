import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/y-r-x5_vg.css';
import '../../css/q/qnmof2bnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="y-r-x5_vg"/><path class="qnmof2bnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-question"} {...others} />);
}

export default Component;

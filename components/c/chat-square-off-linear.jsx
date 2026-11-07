import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o-k-qwbls.css';
import '../../css/r/rjy1xybnj.css';
import '../../css/r/rqx2gjabx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o-k-qwbls"/><path class="rjy1xybnj"/><path class="rqx2gjabx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-off-linear"} {...others} />);
}

export default Component;

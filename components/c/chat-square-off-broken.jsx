import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/re4elkb7b.css';
import '../../css/z/zg90ki5is.css';
import '../../css/r/rqx2gjabx.css';
import '../../css/r/rjy1xybnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="re4elkb7b"/><path class="zg90ki5is"/><path class="rqx2gjabx"/><path class="rjy1xybnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-off-broken"} {...others} />);
}

export default Component;

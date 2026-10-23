import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/e9_vu52aq.css';
import '../../css/l/llqndirqk.css';
import '../../css/s/s4jtdugoi.css';
import '../../css/m/mdnfvcd_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="e9_vu52aq"/><path class="llqndirqk"/><path class="s4jtdugoi"/><path class="mdnfvcd_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:repeat"} {...others} />);
}

export default Component;

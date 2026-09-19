import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qepuaqbvx.css';
import '../../css/h/he2gnabzt.css';
import '../../css/q/qhl6imb-r.css';
import '../../css/t/tl49x2bbn.css';
import '../../css/w/wmern5xfm.css';

const viewBox = {"width":2000,"height":2000};
const content = `<g transform="translate(0 947.638)" class="qepuaqbvx"><rect class="he2gnabzt"/><g class="qhl6imb-r"><path class="tl49x2bbn"/><path class="wmern5xfm"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:send-task"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qepuaqbvx.css';
import '../../css/h/he2gnabzt.css';
import '../../css/e/ed4-52b0w.css';
import '../../css/h/hc4p3qb0k.css';
import '../../css/k/k08ob0lbu.css';

const viewBox = {"width":2000,"height":2000};
const content = `<g transform="translate(0 947.638)" class="qepuaqbvx"><rect class="he2gnabzt"/><g class="ed4-52b0w"><path class="hc4p3qb0k"/><path class="k08ob0lbu"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:receive-task"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bpfv502ud.css';
import '../../css/d/d89xrq6fj.css';
import '../../css/p/pl4tptbmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bpfv502ud wm-k"/><path class="d89xrq6fj wm-a"/><path class="pl4tptbmq wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chart-gantt"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/q7nwfvbkq.css';
import '../../css/a/a5nsjwbyz.css';
import '../../css/g/geuvczi2n.css';
import '../../css/t/t9galjb2r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="q7nwfvbkq"/><path class="a5nsjwbyz"/><path class="geuvczi2n"/><path class="t9galjb2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:handheld"} {...others} />);
}

export default Component;

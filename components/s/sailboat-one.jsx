import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/ktskh049w.css';
import '../../css/a/ab1wfbc-v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ktskh049w"/><path class="ab1wfbc-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sailboat-one"} {...others} />);
}

export default Component;

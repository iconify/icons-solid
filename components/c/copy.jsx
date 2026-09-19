import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gr1__7lov.css';
import '../../css/q/ql3pxnb7t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="gr1__7lov"/><path class="ql3pxnb7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:copy"} {...others} />);
}

export default Component;

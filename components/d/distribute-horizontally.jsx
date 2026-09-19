import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/n/ni7lzb-dh.css';
import '../../css/i/iulnlabex.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ni7lzb-dh"/><path class="iulnlabex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:distribute-horizontally"} {...others} />);
}

export default Component;

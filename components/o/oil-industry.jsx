import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/d/d06-d4bly.css';
import '../../css/y/yvrwegihz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="d06-d4bly"/><path class="yvrwegihz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:oil-industry"} {...others} />);
}

export default Component;

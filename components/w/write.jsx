import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/t/twzes8bmx.css';
import '../../css/d/d0h37k-hr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="twzes8bmx"/><path class="d0h37k-hr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:write"} {...others} />);
}

export default Component;

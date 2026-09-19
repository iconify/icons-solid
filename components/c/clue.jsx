import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/i-81h6bnx.css';
import '../../css/y/yduyyjumo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="i-81h6bnx"/><path class="yduyyjumo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:clue"} {...others} />);
}

export default Component;

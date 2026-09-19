import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fngjr_1gm.css';
import '../../css/x/xreekgbzt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="fngjr_1gm"/><path clip-rule="evenodd" class="xreekgbzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:swallow"} {...others} />);
}

export default Component;

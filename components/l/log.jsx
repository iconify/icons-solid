import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/e/ex4iv0b5o.css';
import '../../css/b/bjqrrbbpt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ex4iv0b5o"/><path class="bjqrrbbpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:log"} {...others} />);
}

export default Component;

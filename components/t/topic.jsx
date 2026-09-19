import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/l8gev8bxx.css';
import '../../css/v/v8_9z7bdz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="l8gev8bxx"/><path class="v8_9z7bdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:topic"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r_6nlzbtv.css';
import '../../css/s/s-wmb8j5z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="r_6nlzbtv"/><path class="s-wmb8j5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bus"} {...others} />);
}

export default Component;

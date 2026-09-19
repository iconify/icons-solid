import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/c/ct1r7w1hv.css';
import '../../css/o/o5dtz77mz.css';
import '../../css/x/xu7x7kbnb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ct1r7w1hv"/><path class="o5dtz77mz"/><path class="xu7x7kbnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:inbox-in"} {...others} />);
}

export default Component;

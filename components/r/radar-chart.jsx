import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bl503myht.css';
import '../../css/f/flmqy2bwe.css';
import '../../css/k/klb-gptbu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="bl503myht"/><path class="flmqy2bwe"/><path class="klb-gptbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:radar-chart"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qcbv30b9l.css';
import '../../css/d/dsz9dwbht.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="qcbv30b9l"/><path class="dsz9dwbht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:map-two"} {...others} />);
}

export default Component;

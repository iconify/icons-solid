import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j48uaibnd.css';
import '../../css/h/h93505_yx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="j48uaibnd"/><path class="h93505_yx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:baby-car-seat"} {...others} />);
}

export default Component;

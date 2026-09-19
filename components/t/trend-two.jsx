import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/r/rg5z66b7q.css';
import '../../css/m/msva-3b9o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="j9hg1or3h"/><path class="rg5z66b7q"/><path class="msva-3b9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:trend-two"} {...others} />);
}

export default Component;

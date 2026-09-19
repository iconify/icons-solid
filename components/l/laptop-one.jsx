import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bl312vbyc.css';
import '../../css/s/s4jn_bwbz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="bl312vbyc"/><path class="s4jn_bwbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:laptop-one"} {...others} />);
}

export default Component;

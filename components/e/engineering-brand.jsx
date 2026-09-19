import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/myxvzd3ao.css';
import '../../css/b/blg8u174q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="myxvzd3ao"/><path class="blg8u174q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:engineering-brand"} {...others} />);
}

export default Component;

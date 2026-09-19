import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/e/etzb_tbee.css';
import '../../css/w/w-ydx1omy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="etzb_tbee"/><path class="w-ydx1omy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:handle-down"} {...others} />);
}

export default Component;

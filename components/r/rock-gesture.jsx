import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tjw-xwbxp.css';
import '../../css/t/ti_16eb_i.css';
import '../../css/h/htl7ndbhh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="tjw-xwbxp"/><rect class="ti_16eb_i"/><rect class="htl7ndbhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rock-gesture"} {...others} />);
}

export default Component;

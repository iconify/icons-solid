import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/h/h0ugno76y.css';
import '../../css/x/xfulg0g6i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="h0ugno76y"/><path class="xfulg0g6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:search"} {...others} />);
}

export default Component;

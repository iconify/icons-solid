import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/otca8wbpp.css';
import '../../css/w/w-bu9e3ii.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="otca8wbpp"/><path class="w-bu9e3ii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:transaction-order"} {...others} />);
}

export default Component;

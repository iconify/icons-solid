import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wy34l7bwz.css';
import '../../css/j/jk8ff9tlc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="wy34l7bwz"/><path class="jk8ff9tlc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:water-rate"} {...others} />);
}

export default Component;

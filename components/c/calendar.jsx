import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/ku2zr4jsc.css';
import '../../css/m/mdlrplbcn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ku2zr4jsc"/><path class="mdlrplbcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:calendar"} {...others} />);
}

export default Component;

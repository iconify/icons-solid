import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/udnfotb3y.css';
import '../../css/m/mirjr4bon.css';
import '../../css/q/q-73_14rz.css';
import '../../css/d/d-ba6dbjs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="udnfotb3y"/><path clip-rule="evenodd" class="mirjr4bon"/><path class="q-73_14rz"/><path class="d-ba6dbjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:trophy"} {...others} />);
}

export default Component;

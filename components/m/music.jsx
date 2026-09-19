import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqopdobjp.css';
import '../../css/o/oqmq_zbkz.css';
import '../../css/e/ejgsjsb6o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hqopdobjp"><circle class="oqmq_zbkz"/><path class="ejgsjsb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:music"} {...others} />);
}

export default Component;

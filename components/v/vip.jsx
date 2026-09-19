import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/h/h-satobgp.css';
import '../../css/p/ptxldtbxo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="h-satobgp"/><path class="ptxldtbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:vip"} {...others} />);
}

export default Component;

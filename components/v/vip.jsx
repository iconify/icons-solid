import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j6kxyub6h.css';
import '../../css/p/ptxldtbxo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="j6kxyub6h"/><path class="ptxldtbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:vip"} {...others} />);
}

export default Component;

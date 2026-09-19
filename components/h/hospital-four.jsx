import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mbeptv2cx.css';
import '../../css/t/tdbrkwbde.css';
import '../../css/s/sn4envb4f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="mbeptv2cx"/><path class="tdbrkwbde"/><path class="sn4envb4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hospital-four"} {...others} />);
}

export default Component;

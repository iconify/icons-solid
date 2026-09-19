import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ahdqpnbyt.css';
import '../../css/h/h6oroiv2p.css';
import '../../css/y/y1tfqfzmq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ahdqpnbyt"/><path clip-rule="evenodd" class="h6oroiv2p"/><path class="y1tfqfzmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pregnant-3638w"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w29pu9vcg.css';
import '../../css/x/xw0-qqx6q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="w29pu9vcg"/><path clip-rule="evenodd" class="xw0-qqx6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:contraceptive-voucher"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hyiumx5dq.css';
import '../../css/s/szz0j1wwy.css';
import '../../css/x/x26wrsjtl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="hyiumx5dq"/><path class="szz0j1wwy"/><path clip-rule="evenodd" class="x26wrsjtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-pressure-outline"} {...others} />);
}

export default Component;

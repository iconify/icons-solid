import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gq-zc8bcu.css';
import '../../css/l/lly56gw9r.css';
import '../../css/b/bc-0_z50q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gq-zc8bcu"/><path class="lly56gw9r"/><path class="bc-0_z50q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:llin-outline"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a6twuqi8j.css';
import '../../css/e/e99g3bssn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="a6twuqi8j"/><path class="e99g3bssn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:dry-mouth"} {...others} />);
}

export default Component;

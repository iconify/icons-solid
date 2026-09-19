import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lhlgm2lyy.css';
import '../../css/o/ozxnukb5t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="lhlgm2lyy"/><path clip-rule="evenodd" class="ozxnukb5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:vomitting-outline"} {...others} />);
}

export default Component;

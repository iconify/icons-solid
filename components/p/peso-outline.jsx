import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x-8ter4yn.css';
import '../../css/d/dndb2vpww.css';
import '../../css/b/b9udazptr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="x-8ter4yn"/><path clip-rule="evenodd" class="dndb2vpww"/><path class="b9udazptr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:peso-outline"} {...others} />);
}

export default Component;

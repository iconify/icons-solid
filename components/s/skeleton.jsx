import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b0a-p0bve.css';
import '../../css/r/r599byb8u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="b0a-p0bve"/><path clip-rule="evenodd" class="r599byb8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:skeleton"} {...others} />);
}

export default Component;

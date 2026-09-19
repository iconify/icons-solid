import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l8gq9ob0l.css';
import '../../css/n/nkbistf8y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="l8gq9ob0l"/><path clip-rule="evenodd" class="nkbistf8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:hazardous"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k7q397iue.css';
import '../../css/f/fq6vlbqqd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="k7q397iue"/><path clip-rule="evenodd" class="fq6vlbqqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sweating"} {...others} />);
}

export default Component;

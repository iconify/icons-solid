import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y7y4rmcqj.css';
import '../../css/b/b7k4_bbom.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="y7y4rmcqj"/><path clip-rule="evenodd" class="b7k4_bbom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:animal-cow-outline"} {...others} />);
}

export default Component;

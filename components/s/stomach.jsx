import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tuv1yhryp.css';
import '../../css/s/srwgimbey.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="tuv1yhryp"/><path clip-rule="evenodd" class="srwgimbey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:stomach"} {...others} />);
}

export default Component;

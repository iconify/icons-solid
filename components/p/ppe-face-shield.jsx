import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x03-hbueg.css';
import '../../css/n/ndmvfbulu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="x03-hbueg"/><path clip-rule="evenodd" class="ndmvfbulu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ppe-face-shield"} {...others} />);
}

export default Component;

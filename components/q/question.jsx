import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y2oh11blp.css';
import '../../css/i/iluyrlbkh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="y2oh11blp"/><path clip-rule="evenodd" class="iluyrlbkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:question"} {...others} />);
}

export default Component;

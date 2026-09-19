import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uxv44pbef.css';
import '../../css/j/jr8aifbqs.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uxv44pbef"/><path class="jr8aifbqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:mic-download-compact"} {...others} />);
}

export default Component;

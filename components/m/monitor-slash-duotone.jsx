import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_6dq0bie.css';
import '../../css/d/da4ksyy_o.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="j_6dq0bie"/><path class="da4ksyy_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:monitor-slash-duotone"} {...others} />);
}

export default Component;

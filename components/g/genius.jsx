import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nk4syz2ss.css';
import '../../css/u/u9wri7bhi.css';

const viewBox = {"width":30,"height":32};
const content = `<g class="cuyn6tgcc"><path class="nk4syz2ss"/><path class="u9wri7bhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:genius"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dasydz0wv.css';
import '../../css/t/t8m9kwbhx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="dasydz0wv"/><path clip-rule="evenodd" class="t8m9kwbhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:vih-outline"} {...others} />);
}

export default Component;

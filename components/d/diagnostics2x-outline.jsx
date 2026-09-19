import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2-lv5boq.css';
import '../../css/o/o34fr3bgc.css';
import '../../css/v/v52a6hbjy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="f2-lv5boq"/><path clip-rule="evenodd" class="o34fr3bgc"/><path class="v52a6hbjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:diagnostics2x-outline"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/huc8kob5d.css';
import '../../css/t/tydibpbng.css';
import '../../css/i/iv1ga_uim.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="huc8kob5d"/><path clip-rule="evenodd" class="tydibpbng"/><path class="iv1ga_uim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:expectorate-outline"} {...others} />);
}

export default Component;

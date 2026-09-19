import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yvduz7rkw.css';
import '../../css/f/fx29-ogfr.css';
import '../../css/u/ud58kx82j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yvduz7rkw"/><path clip-rule="evenodd" class="fx29-ogfr"/><path class="ud58kx82j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:calendar-quarantine2x-outline"} {...others} />);
}

export default Component;

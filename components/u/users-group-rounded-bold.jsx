import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uo3e6gbze.css';
import '../../css/i/i0b8n-y7j.css';
import '../../css/h/hl78y5ebu.css';
import '../../css/s/srjd9cjvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uo3e6gbze"/><path class="i0b8n-y7j"/><path class="hl78y5ebu"/><path class="srjd9cjvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-rounded-bold"} {...others} />);
}

export default Component;

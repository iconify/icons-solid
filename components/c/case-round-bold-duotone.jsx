import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5hh53b_u.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/m/mjiehcc6m.css';
import '../../css/v/vcowebo7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i5hh53b_u"/><g class="mc2zb0bvp"><path class="mjiehcc6m"/><path class="vcowebo7q"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-round-bold-duotone"} {...others} />);
}

export default Component;

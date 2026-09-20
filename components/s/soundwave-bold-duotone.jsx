import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/us1rf-l6o.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/gg3lrpbex.css';
import '../../css/u/uo4fesb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="us1rf-l6o"/><g class="mc2zb0bvp"><path class="gg3lrpbex"/><path class="uo4fesb6x"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:soundwave-bold-duotone"} {...others} />);
}

export default Component;

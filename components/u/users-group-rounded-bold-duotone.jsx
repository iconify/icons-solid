import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/dayjs-bgu.css';
import '../../css/d/dr1p0554f.css';
import '../../css/u/uo3e6gbze.css';
import '../../css/h/hl78y5ebu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="dayjs-bgu"/><path class="dr1p0554f"/></g><path class="uo3e6gbze"/><path class="hl78y5ebu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-rounded-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mt96jhb4p.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/y/yd398tbty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mt96jhb4p"/><path class="yw4fz_b6b"/><path class="yd398tbty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-circle-duo"} {...others} />);
}

export default Component;

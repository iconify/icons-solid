import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t5kuevs6k.css';
import '../../css/p/pgaah8bvy.css';
import '../../css/y/ypb3ww6cw.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><rect class="t5kuevs6k"/><path class="pgaah8bvy"/><path clip-rule="evenodd" class="ypb3ww6cw"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:battery-off"} {...others} />);
}

export default Component;

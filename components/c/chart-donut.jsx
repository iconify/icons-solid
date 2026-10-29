import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v1055zads.css';
import '../../css/u/uv6uwdbji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="v1055zads"/><path class="uv6uwdbji wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-donut"} {...others} />);
}

export default Component;

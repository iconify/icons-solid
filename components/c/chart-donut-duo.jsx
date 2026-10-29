import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ugfrr8bnj.css';
import '../../css/z/zo12m9vrh.css';
import '../../css/u/uv6uwdbji.css';
import '../../css/v/v1055zads.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ugfrr8bnj"/><path class="wm-a zo12m9vrh"/><path class="uv6uwdbji wm-a"/><path class="v1055zads"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-donut-duo"} {...others} />);
}

export default Component;

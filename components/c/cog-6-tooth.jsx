import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k4fxm-bzg.css';
import '../../css/k/ktu665dou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k4fxm-bzg"/><path class="ktu665dou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:cog-6-tooth"} {...others} />);
}

export default Component;

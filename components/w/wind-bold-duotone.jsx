import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gc7mvhrpq.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/z9v-29bvh.css';
import '../../css/v/vnyou5k3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gc7mvhrpq"/><g class="mc2zb0bvp"><path class="z9v-29bvh"/><path class="vnyou5k3z"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wind-bold-duotone"} {...others} />);
}

export default Component;

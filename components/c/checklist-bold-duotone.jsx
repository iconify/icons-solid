import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yuh3c-bdf.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/h_oi-tcog.css';
import '../../css/z/zsdc5-17y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yuh3c-bdf"/><g class="mc2zb0bvp"><path class="h_oi-tcog"/><path class="zsdc5-17y"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:checklist-bold-duotone"} {...others} />);
}

export default Component;

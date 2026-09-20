import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ylec2ub1i.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/thqt1dbyk.css';
import '../../css/l/lot9ypbnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ylec2ub1i"/><g class="mc2zb0bvp"><path class="thqt1dbyk"/><path class="lot9ypbnj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-2-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vweesvbka.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/a/ah45prb2d.css';
import '../../css/e/en7qtqbkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vweesvbka"/><g class="mc2zb0bvp"><path class="ah45prb2d"/><path class="en7qtqbkh"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:black-hole-3-bold-duotone"} {...others} />);
}

export default Component;

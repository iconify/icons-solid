import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x57fcibhl.css';
import '../../css/m/mn1_zfo6x.css';
import '../../css/u/ug-g1ubih.css';
import '../../css/a/a2fzhvk0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="x57fcibhl"/><path class="mn1_zfo6x wm-a"/><path class="ug-g1ubih"/><path class="a2fzhvk0r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shopping-basket-duo"} {...others} />);
}

export default Component;

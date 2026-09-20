import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/m/me44qacwj.css';
import '../../css/f/fpb37bc7d.css';
import '../../css/y/y62g66b9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="me44qacwj"/><path class="fpb37bc7d"/></g><path clip-rule="evenodd" class="y62g66b9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-2-bold-duotone"} {...others} />);
}

export default Component;

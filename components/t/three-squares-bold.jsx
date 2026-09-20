import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ryluzc2qx.css';
import '../../css/k/k8_y8zb6l.css';
import '../../css/h/hsetly8ov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ryluzc2qx"/><path class="k8_y8zb6l"/><path class="hsetly8ov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:three-squares-bold"} {...others} />);
}

export default Component;

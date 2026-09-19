import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlx2oubwz.css';
import '../../css/i/ih154-0ss.css';
import '../../css/y/ysed92b4j.css';
import '../../css/k/kcd5utbru.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mlx2oubwz"/><path class="ih154-0ss"/><path class="ysed92b4j"/><path class="kcd5utbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:cloud-up"} {...others} />);
}

export default Component;

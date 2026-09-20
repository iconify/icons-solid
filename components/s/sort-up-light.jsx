import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/k_t6vibnj.css';
import '../../css/l/l74h3ibbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="k_t6vibnj"/><path class="l74h3ibbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sort-up-light"} {...others} />);
}

export default Component;

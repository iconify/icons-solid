import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ku9otcwlu.css';
import '../../css/k/klkx55b0y.css';
import '../../css/y/ycuo71n9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ku9otcwlu"/><path class="klkx55b0y"/><path clip-rule="evenodd" class="ycuo71n9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-ring-bold-duotone"} {...others} />);
}

export default Component;

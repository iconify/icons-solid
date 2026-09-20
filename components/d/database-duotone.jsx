import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xnpuym6an.css';
import '../../css/c/c4lpx2e8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xnpuym6an"/><path clip-rule="evenodd" class="c4lpx2e8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:database-duotone"} {...others} />);
}

export default Component;

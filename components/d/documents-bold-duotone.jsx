import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nd4j71d2d.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/j0tyonbdw.css';
import '../../css/k/k0d7q8bwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nd4j71d2d"/><g class="mc2zb0bvp"><path class="j0tyonbdw"/><path class="k0d7q8bwx"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:documents-bold-duotone"} {...others} />);
}

export default Component;

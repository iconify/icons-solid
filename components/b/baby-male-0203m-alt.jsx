import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sgsol42ey.css';
import '../../css/f/f202qswyl.css';
import '../../css/g/g362mc32e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="sgsol42ey"/><path clip-rule="evenodd" class="f202qswyl"/><path class="g362mc32e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:baby-male-0203m-alt"} {...others} />);
}

export default Component;

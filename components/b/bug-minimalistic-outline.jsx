import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6yq9sr9t.css';
import '../../css/o/orn1n2npw.css';
import '../../css/v/v88mkbbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c6yq9sr9t"/><path class="orn1n2npw"/><path clip-rule="evenodd" class="v88mkbbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bug-minimalistic-outline"} {...others} />);
}

export default Component;

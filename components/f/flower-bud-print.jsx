import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dy34s966k.css';
import '../../css/d/dti_lwbpo.css';
import '../../css/r/rultu2b4m.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dy34s966k"/><path class="dti_lwbpo"/><path clip-rule="evenodd" class="rultu2b4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:flower-bud-print"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l9ya84bkl.css';
import '../../css/q/qqxd-xb-l.css';
import '../../css/i/i__q0s33s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l9ya84bkl"/><path class="qqxd-xb-l"/><path clip-rule="evenodd" class="i__q0s33s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-bold"} {...others} />);
}

export default Component;

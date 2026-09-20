import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rgz-_0tym.css';
import '../../css/d/d8q4e7j3z.css';
import '../../css/h/hy5r8xb9e.css';
import '../../css/l/l92feidoj.css';
import '../../css/m/mds0_q72e.css';
import '../../css/z/zofvwwbzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rgz-_0tym"/><path clip-rule="evenodd" class="d8q4e7j3z"/><path clip-rule="evenodd" class="hy5r8xb9e"/><path class="l92feidoj"/><path class="mds0_q72e"/><path class="zofvwwbzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:vanity-bold-duotone"} {...others} />);
}

export default Component;

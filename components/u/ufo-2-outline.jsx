import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xiby4z7mg.css';
import '../../css/d/dburuob9x.css';
import '../../css/j/j7a8dw7vf.css';
import '../../css/s/s5chcxbnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xiby4z7mg"/><path class="dburuob9x"/><path class="j7a8dw7vf"/><path clip-rule="evenodd" class="s5chcxbnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-2-outline"} {...others} />);
}

export default Component;

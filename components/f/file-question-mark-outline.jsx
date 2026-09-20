import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0anpxbww.css';
import '../../css/u/u9gx6z3th.css';
import '../../css/m/m-_pys7sn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="p0anpxbww"/><path class="u9gx6z3th"/><path clip-rule="evenodd" class="m-_pys7sn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-question-mark-outline"} {...others} />);
}

export default Component;

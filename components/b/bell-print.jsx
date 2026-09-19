import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_29t6_8t.css';
import '../../css/r/rys3lkbnk.css';
import '../../css/s/s5pzo9x7j.css';
import '../../css/m/m90j_eaof.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l_29t6_8t"/><path class="rys3lkbnk"/><path clip-rule="evenodd" class="s5pzo9x7j"/><path class="m90j_eaof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:bell-print"} {...others} />);
}

export default Component;

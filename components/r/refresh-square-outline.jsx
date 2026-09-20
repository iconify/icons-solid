import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/acais7bes.css';
import '../../css/x/xksjiacqg.css';
import '../../css/z/zuqh_gv5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="acais7bes"/><path class="xksjiacqg"/><path clip-rule="evenodd" class="zuqh_gv5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:refresh-square-outline"} {...others} />);
}

export default Component;

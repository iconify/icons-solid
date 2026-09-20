import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zi0hccb1b.css';
import '../../css/r/rsmkg3b5t.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/p/pvz-nrbjs.css';
import '../../css/w/w63jv9baz.css';
import '../../css/l/ll913_fwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zi0hccb1b"/><path class="rsmkg3b5t"/><g class="mc2zb0bvp"><path class="pvz-nrbjs"/><path class="w63jv9baz"/><path class="ll913_fwt"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-2-bold-duotone"} {...others} />);
}

export default Component;

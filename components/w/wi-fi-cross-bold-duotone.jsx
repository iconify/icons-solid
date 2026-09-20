import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/opi0yfbgs.css';
import '../../css/f/f0xxkyjkv.css';
import '../../css/e/ej_c7zbbd.css';
import '../../css/f/faoe3kvrs.css';
import '../../css/j/jt903s9_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="opi0yfbgs"/><path class="f0xxkyjkv"/><path class="ej_c7zbbd"/><path class="faoe3kvrs"/></g><path class="jt903s9_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-cross-bold-duotone"} {...others} />);
}

export default Component;

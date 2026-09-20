import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/io2mm3b4i.css';
import '../../css/d/dfep9nb_v.css';
import '../../css/u/ug1uowu6z.css';
import '../../css/h/hbb908j_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="io2mm3b4i"/><path class="dfep9nb_v"/><path class="ug1uowu6z"/><path class="hbb908j_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-bold-duotone"} {...others} />);
}

export default Component;

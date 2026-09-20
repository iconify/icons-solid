import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjag56b6z.css';
import '../../css/t/to0gngukh.css';
import '../../css/y/y9ux0m6cs.css';
import '../../css/w/w7btjd8vc.css';
import '../../css/w/wydl4s5pn.css';
import '../../css/f/fk10khbfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zjag56b6z"/><path class="to0gngukh"/><path class="y9ux0m6cs"/><path class="w7btjd8vc"/><path class="wydl4s5pn"/><path clip-rule="evenodd" class="fk10khbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-money-bold-duotone"} {...others} />);
}

export default Component;

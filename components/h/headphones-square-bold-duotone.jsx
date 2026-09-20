import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eedfmc7cf.css';
import '../../css/z/zn6maybfa.css';
import '../../css/f/fzmazu3_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eedfmc7cf"/><path class="zn6maybfa"/><path class="fzmazu3_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-square-bold-duotone"} {...others} />);
}

export default Component;

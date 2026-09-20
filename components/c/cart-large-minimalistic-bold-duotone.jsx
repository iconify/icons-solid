import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s7l_y66fk.css';
import '../../css/f/f0jsc0b6v.css';
import '../../css/r/r2gkxdybh.css';
import '../../css/n/nrmjjwb4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s7l_y66fk"/><path class="f0jsc0b6v"/><path class="r2gkxdybh"/><path class="nrmjjwb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-minimalistic-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fxf_y46er.css';
import '../../css/q/q-ysljqry.css';
import '../../css/x/xyl_j6bra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fxf_y46er"/><path class="q-ysljqry"/><path class="xyl_j6bra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:swimming-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cc1czgsqt.css';
import '../../css/c/c_zdt_bqs.css';
import '../../css/l/lw_g68b2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cc1czgsqt"/><path class="c_zdt_bqs"/><path class="lw_g68b2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-block-rounded-bold-duotone"} {...others} />);
}

export default Component;

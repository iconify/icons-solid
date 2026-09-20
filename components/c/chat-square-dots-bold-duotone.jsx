import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/to8tv_bdi.css';
import '../../css/b/bsq_v5_ec.css';
import '../../css/c/cc53t4bin.css';
import '../../css/v/vrj59qcoz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="to8tv_bdi"/><path class="bsq_v5_ec"/><path class="cc53t4bin"/><path class="vrj59qcoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-dots-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ymovc7j9m.css';
import '../../css/v/vrj59qcoz.css';
import '../../css/c/cc53t4bin.css';
import '../../css/b/bsq_v5_ec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ymovc7j9m"/><path class="vrj59qcoz"/><path class="cc53t4bin"/><path class="bsq_v5_ec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-dots-outline"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cu9odw3qy.css';
import '../../css/c/cxqjcctvs.css';
import '../../css/a/a44ytmbfp.css';
import '../../css/m/m_goimbsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cu9odw3qy"/><path class="cxqjcctvs"/><path class="a44ytmbfp"/><path clip-rule="evenodd" class="m_goimbsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-code-outline"} {...others} />);
}

export default Component;

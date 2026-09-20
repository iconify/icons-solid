import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vq_xz2nmb.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/fh1mgzuzo.css';
import '../../css/s/s2p8flb5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vq_xz2nmb"/><g class="mc2zb0bvp"><path class="fh1mgzuzo"/><path class="s2p8flb5p"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:forward-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k83ygvv2n.css';
import '../../css/s/smchphbbk.css';
import '../../css/l/lh26qe_gi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="k83ygvv2n"/><path clip-rule="evenodd" class="smchphbbk"/><path clip-rule="evenodd" class="lh26qe_gi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:mobile-outline-24px"} {...others} />);
}

export default Component;

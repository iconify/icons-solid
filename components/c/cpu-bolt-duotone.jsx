import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b1w3jxbdi.css';
import '../../css/n/n3xmixbkr.css';
import '../../css/n/nvixmrbwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b1w3jxbdi"/><path clip-rule="evenodd" class="n3xmixbkr"/><path class="nvixmrbwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cpu-bolt-duotone"} {...others} />);
}

export default Component;

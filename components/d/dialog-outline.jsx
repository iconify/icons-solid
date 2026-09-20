import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/px8vwib8v.css';
import '../../css/o/olk-hrbfo.css';
import '../../css/g/g36f5_bfg.css';
import '../../css/u/u3-9r76_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="px8vwib8v"/><path class="olk-hrbfo"/><path class="g36f5_bfg"/><path class="u3-9r76_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-outline"} {...others} />);
}

export default Component;

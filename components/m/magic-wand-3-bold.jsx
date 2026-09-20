import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lwu146b2l.css';
import '../../css/k/km4u5cc_i.css';
import '../../css/q/qtktxacxl.css';
import '../../css/p/ptzle3bnr.css';
import '../../css/k/k2hspqbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lwu146b2l"/><path class="km4u5cc_i"/><path class="qtktxacxl"/><path class="ptzle3bnr"/><path class="k2hspqbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-wand-3-bold"} {...others} />);
}

export default Component;

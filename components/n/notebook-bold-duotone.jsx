import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pte4imbmq.css';
import '../../css/c/c0fao-bwt.css';
import '../../css/m/mob5m333w.css';
import '../../css/f/f4490rb0n.css';
import '../../css/b/bokxqfwcd.css';
import '../../css/d/dzbml3t8n.css';
import '../../css/w/w2dwhybkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pte4imbmq"/><path class="c0fao-bwt"/><path class="mob5m333w"/><path class="f4490rb0n"/><path class="bokxqfwcd"/><path class="dzbml3t8n"/><path class="w2dwhybkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/ssay0hb0x.css';
import '../../css/d/dfxmsc_9y.css';
import '../../css/s/spo_u28cc.css';
import '../../css/q/q_ug04b6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ssay0hb0x"/><path class="dfxmsc_9y"/><path class="spo_u28cc"/><path clip-rule="evenodd" class="q_ug04b6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:window-frame-outline"} {...others} />);
}

export default Component;

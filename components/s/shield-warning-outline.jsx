import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_n-lsb4d.css';
import '../../css/t/tpngthz3k.css';
import '../../css/i/ibj2xggkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="g_n-lsb4d"/><path class="tpngthz3k"/><path clip-rule="evenodd" class="ibj2xggkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-warning-outline"} {...others} />);
}

export default Component;

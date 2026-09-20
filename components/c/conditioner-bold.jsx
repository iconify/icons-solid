import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l4-8uwvku.css';
import '../../css/v/vl9-uiboj.css';
import '../../css/f/folbbn6nl.css';
import '../../css/z/zt9_sjbee.css';
import '../../css/x/xncwnzuom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l4-8uwvku"/><path clip-rule="evenodd" class="vl9-uiboj"/><path clip-rule="evenodd" class="folbbn6nl"/><path clip-rule="evenodd" class="zt9_sjbee"/><path class="xncwnzuom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:conditioner-bold"} {...others} />);
}

export default Component;

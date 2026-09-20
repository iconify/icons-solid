import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zt9_sjbee.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/td2shabyo.css';
import '../../css/y/ymvj8abtr.css';
import '../../css/i/i8124czcp.css';
import '../../css/n/nu47jjbnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zt9_sjbee"/><g class="mc2zb0bvp"><path class="td2shabyo"/><path class="ymvj8abtr"/><path class="i8124czcp"/><path class="nu47jjbnm"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:conditioner-bold-duotone"} {...others} />);
}

export default Component;

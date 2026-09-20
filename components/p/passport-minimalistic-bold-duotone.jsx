import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/etxhcrbpc.css';
import '../../css/i/if816nbxh.css';
import '../../css/s/sj3u3hrzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="etxhcrbpc"/><path clip-rule="evenodd" class="if816nbxh"/><path class="sj3u3hrzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:passport-minimalistic-bold-duotone"} {...others} />);
}

export default Component;

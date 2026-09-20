import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0idaqb9i.css';
import '../../css/p/p3ilim6vk.css';
import '../../css/r/rm3taibxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a0idaqb9i"/><path class="p3ilim6vk"/><path class="rm3taibxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:face-scan-circle-duotone"} {...others} />);
}

export default Component;

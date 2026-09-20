import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jhnaldtzj.css';
import '../../css/n/n0vk0fbzu.css';
import '../../css/c/c06dsh52r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jhnaldtzj"/><path class="n0vk0fbzu"/><path class="c06dsh52r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:station-duotone"} {...others} />);
}

export default Component;

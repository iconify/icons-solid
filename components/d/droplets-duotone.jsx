import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eovx-6bvh.css';
import '../../css/q/q62eb2b2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="eovx-6bvh"/><path class="q62eb2b2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:droplets-duotone"} {...others} />);
}

export default Component;

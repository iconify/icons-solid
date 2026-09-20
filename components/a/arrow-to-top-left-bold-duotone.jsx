import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x4hd2m6zb.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/w10tlo1bi.css';
import '../../css/n/nb7gx3byg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x4hd2m6zb"/><g class="mc2zb0bvp"><path class="w10tlo1bi"/><path class="nb7gx3byg"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-to-top-left-bold-duotone"} {...others} />);
}

export default Component;

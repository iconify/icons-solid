import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hna7n1bsd.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/gjdm3pbxq.css';
import '../../css/w/wryprvbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hna7n1bsd"/><g class="mc2zb0bvp"><path class="gjdm3pbxq"/><path class="wryprvbkm"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-full-screen-bold-duotone"} {...others} />);
}

export default Component;

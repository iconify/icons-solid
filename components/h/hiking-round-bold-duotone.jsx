import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hlil8_b4l.css';
import '../../css/e/ews0u17zd.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/r3qvqygmn.css';
import '../../css/z/zt-41go0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hlil8_b4l"/><path clip-rule="evenodd" class="ews0u17zd"/><g class="mc2zb0bvp"><path class="r3qvqygmn"/><path class="zt-41go0y"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-round-bold-duotone"} {...others} />);
}

export default Component;

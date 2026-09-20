import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hlil8_b4l.css';
import '../../css/g/g46ujrbqb.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/ynv6fkb2h.css';
import '../../css/f/fd9mfdh9e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hlil8_b4l"/><path clip-rule="evenodd" class="g46ujrbqb"/><g class="mc2zb0bvp"><path class="ynv6fkb2h"/><path class="fd9mfdh9e"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-bold-duotone"} {...others} />);
}

export default Component;

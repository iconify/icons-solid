import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ewzmyackw.css';
import '../../css/g/gkyuuubsb.css';
import '../../css/a/as3d_z4zk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ewzmyackw"/><path class="gkyuuubsb"/><path class="as3d_z4zk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-smile-bold-duotone"} {...others} />);
}

export default Component;

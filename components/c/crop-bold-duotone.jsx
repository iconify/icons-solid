import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t0fk-7bfk.css';
import '../../css/s/ss6dzqb4x.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/ymoj7fw8s.css';
import '../../css/y/yd_hzrbep.css';
import '../../css/c/cumps5j8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="t0fk-7bfk"/><path class="ss6dzqb4x"/><g class="mc2zb0bvp"><path class="ymoj7fw8s"/><path class="yd_hzrbep"/><path class="cumps5j8w"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crop-bold-duotone"} {...others} />);
}

export default Component;

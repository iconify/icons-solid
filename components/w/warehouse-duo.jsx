import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/et8dm98nh.css';
import '../../css/g/g3_i1_bjs.css';
import '../../css/w/wmk_i8bat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="et8dm98nh"/><path class="g3_i1_bjs wm-a"/><path class="wmk_i8bat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:warehouse-duo"} {...others} />);
}

export default Component;

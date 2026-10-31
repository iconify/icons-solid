import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pm3pyg9gd.css';
import '../../css/x/xzgfyvbvc.css';
import '../../css/t/tmhkbyb-a.css';
import '../../css/n/n_3ksjaeq.css';
import '../../css/h/hi3xwjg9j.css';
import '../../css/l/lu_3n9bmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="pm3pyg9gd wm-shadow"/><path class="xzgfyvbvc"/><path class="tmhkbyb-a"/><path class="n_3ksjaeq"/><path class="hi3xwjg9j"/><path class="lu_3n9bmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:magnet"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k459z7k3d.css';
import '../../css/d/d074ckbgd.css';
import '../../css/s/st-oxhb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="k459z7k3d"/><path class="d074ckbgd wm-s"/><path class="st-oxhb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:volume-off-duo"} {...others} />);
}

export default Component;

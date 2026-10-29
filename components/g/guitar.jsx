import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/knf-w_g_n.css';
import '../../css/c/c96fvtbfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="knf-w_g_n"/><path class="c96fvtbfs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:guitar"} {...others} />);
}

export default Component;

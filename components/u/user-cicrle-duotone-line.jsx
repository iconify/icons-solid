import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxc6vr24n.css';
import '../../css/p/ptr3-9b_e.css';
import '../../css/v/vf7wv5bfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="mxc6vr24n"/><circle class="ptr3-9b_e"/><path class="vf7wv5bfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-cicrle-duotone-line"} {...others} />);
}

export default Component;

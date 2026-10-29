import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lvwj8zv0y.css';
import '../../css/d/d-c_quigx.css';
import '../../css/e/ekmlpmtjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lvwj8zv0y"/><path class="d-c_quigx wm-a"/><path class="ekmlpmtjg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:brain-cog"} {...others} />);
}

export default Component;

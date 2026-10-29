import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v40qmob5j.css';
import '../../css/g/gv3f9df9z.css';
import '../../css/m/m4sbppbnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v40qmob5j wm-k"/><path class="gv3f9df9z wm-s"/><path class="m4sbppbnj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cloud-cog"} {...others} />);
}

export default Component;

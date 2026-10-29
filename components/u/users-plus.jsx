import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fgf5ofbsz.css';
import '../../css/p/pg2z7mb-s.css';
import '../../css/b/byz546bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fgf5ofbsz"/><path class="pg2z7mb-s wm-a"/><path class="byz546bvh wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:users-plus"} {...others} />);
}

export default Component;

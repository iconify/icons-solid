import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/acgxfbc2f.css';
import '../../css/s/s7y7hlu-e.css';
import '../../css/b/byz546bvh.css';
import '../../css/f/fgf5ofbsz.css';
import '../../css/p/pg2z7mb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="acgxfbc2f"/><path class="s7y7hlu-e wm-a"/><path class="byz546bvh wm-s"/><path class="fgf5ofbsz"/><path class="pg2z7mb-s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:users-plus-duo"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/slj835bqd.css';
import '../../css/y/yc_3dzbcv.css';
import '../../css/b/b4svt7b_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="slj835bqd"/><path class="wm-a yc_3dzbcv"/><path class="b4svt7b_k wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mosque"} {...others} />);
}

export default Component;

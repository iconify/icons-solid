import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rltf4qbkr.css';
import '../../css/u/ui32hib9b.css';
import '../../css/b/b-jt0k5cr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="rltf4qbkr"/><path class="ui32hib9b wm-a"/><path class="b-jt0k5cr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crown-duo"} {...others} />);
}

export default Component;

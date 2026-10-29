import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bnbj9bspw.css';
import '../../css/e/et5-78afr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bnbj9bspw"/><path class="et5-78afr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevrons-right-duo"} {...others} />);
}

export default Component;

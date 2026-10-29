import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/azlmfgbpz.css';
import '../../css/v/vu-t8mz1s.css';
import '../../css/b/bx2-xs7ey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="azlmfgbpz"/><path class="vu-t8mz1s"/><path class="bx2-xs7ey wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:home"} {...others} />);
}

export default Component;

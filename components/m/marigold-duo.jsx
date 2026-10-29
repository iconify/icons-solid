import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gfuk4nbmr.css';
import '../../css/e/eez02jb3b.css';
import '../../css/i/ij72ljbex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gfuk4nbmr"/><path class="eez02jb3b wm-a"/><path class="ij72ljbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:marigold-duo"} {...others} />);
}

export default Component;

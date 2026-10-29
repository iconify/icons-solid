import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vlkwl-34d.css';
import '../../css/o/oy6a688zn.css';
import '../../css/k/k_lneb11t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vlkwl-34d"/><path class="oy6a688zn wm-a"/><path class="k_lneb11t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:archive-duo"} {...others} />);
}

export default Component;

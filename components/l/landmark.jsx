import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qxeb53bcu.css';
import '../../css/p/pn26gtbed.css';
import '../../css/y/yir38rtkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qxeb53bcu wm-shadow"/><path class="pn26gtbed"/><path class="yir38rtkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:landmark"} {...others} />);
}

export default Component;

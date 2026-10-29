import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/ka2x2ewdo.css';
import '../../css/x/x0p2gccdt.css';
import '../../css/p/pr3luab9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ka2x2ewdo wm-k"/><path class="wm-a x0p2gccdt"/><path class="pr3luab9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:boxes"} {...others} />);
}

export default Component;

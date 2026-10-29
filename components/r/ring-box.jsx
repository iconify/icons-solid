import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b5et55b8u.css';
import '../../css/z/z17pphbll.css';
import '../../css/u/uj006kbdm.css';
import '../../css/a/aiuujzw4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b5et55b8u wm-k"/><path class="wm-k z17pphbll"/><path class="uj006kbdm wm-s"/><path class="aiuujzw4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:ring-box"} {...others} />);
}

export default Component;

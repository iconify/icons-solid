import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/z/z5gxc3bbu.css';
import '../../css/x/xuj85wbkw.css';
import '../../css/d/d37966b6e.css';
import '../../css/q/q1c-wrbbt.css';
import '../../css/d/dcd4-sy0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="z5gxc3bbu"/><path class="xuj85wbkw"/><path class="d37966b6e"/><path class="q1c-wrbbt"/><path class="dcd4-sy0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:folder-lock"} {...others} />);
}

export default Component;

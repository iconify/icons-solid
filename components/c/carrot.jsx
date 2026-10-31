import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ynpy5jbax.css';
import '../../css/a/aezssibmt.css';
import '../../css/f/f5v4qdb4b.css';
import '../../css/l/llvkdsbbe.css';
import '../../css/f/f000v-6wy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow ynpy5jbax"/><path class="aezssibmt"/><path class="f5v4qdb4b"/><path class="llvkdsbbe"/><path class="f000v-6wy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:carrot"} {...others} />);
}

export default Component;

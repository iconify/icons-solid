import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/reu6pobru.css';
import '../../css/d/d0ebidbyd.css';
import '../../css/d/dfc389afp.css';
import '../../css/r/r4_x6cbis.css';
import '../../css/r/rx439jj7u.css';
import '../../css/i/i-uh03bbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="reu6pobru wm-shadow"/><path class="d0ebidbyd"/><path class="dfc389afp"/><path class="r4_x6cbis"/><path class="rx439jj7u"/><path class="i-uh03bbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:octagon-x"} {...others} />);
}

export default Component;

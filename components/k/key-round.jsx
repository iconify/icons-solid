import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ufezbhbnb.css';
import '../../css/d/dr38pibpy.css';
import '../../css/y/y0u8crxjd.css';
import '../../css/d/dwerylbgk.css';
import '../../css/x/x4yeyq53o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ufezbhbnb wm-shadow"/><path class="dr38pibpy"/><path class="y0u8crxjd"/><path class="dwerylbgk"/><path class="x4yeyq53o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:key-round"} {...others} />);
}

export default Component;

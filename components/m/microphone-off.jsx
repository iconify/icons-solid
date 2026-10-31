import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ijwbir13f.css';
import '../../css/g/gk2c3buwa.css';
import '../../css/o/o1uhu6yjk.css';
import '../../css/r/r_a3q8b5t.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ijwbir13f wm-shadow"/><path class="gk2c3buwa"/><path class="o1uhu6yjk"/><path class="r_a3q8b5t"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:microphone-off"} {...others} />);
}

export default Component;

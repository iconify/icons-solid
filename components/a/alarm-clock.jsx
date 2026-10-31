import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/npwut2wzw.css';
import '../../css/d/d45l1ubbl.css';
import '../../css/h/h47nhk99c.css';
import '../../css/f/fsmp9_12h.css';
import '../../css/o/o3tab8buq.css';
import '../../css/k/ko165zwes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="npwut2wzw wm-shadow"/><path class="d45l1ubbl"/><path class="h47nhk99c"/><path class="fsmp9_12h"/><path class="o3tab8buq"/><path class="ko165zwes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:alarm-clock"} {...others} />);
}

export default Component;

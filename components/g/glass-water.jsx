import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sftki1bda.css';
import '../../css/m/m20uhxhne.css';
import '../../css/r/rfwzl-bvm.css';
import '../../css/l/l1p6gsbby.css';
import '../../css/v/vqibptbhh.css';
import '../../css/d/dhqfigb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sftki1bda wm-shadow"/><path class="m20uhxhne"/><path class="rfwzl-bvm"/><path class="l1p6gsbby"/><path class="vqibptbhh"/><path class="dhqfigb1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:glass-water"} {...others} />);
}

export default Component;

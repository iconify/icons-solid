import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/avaiarbdp.css';
import '../../css/w/wr2jugbgk.css';
import '../../css/a/a0rop_olk.css';
import '../../css/l/lt4rf5d5k.css';
import '../../css/f/fjkwaobii.css';
import '../../css/z/zo9nghbfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="avaiarbdp wm-shadow"/><path class="wr2jugbgk"/><path class="a0rop_olk"/><path class="lt4rf5d5k"/><path class="fjkwaobii"/><path class="zo9nghbfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:flower"} {...others} />);
}

export default Component;

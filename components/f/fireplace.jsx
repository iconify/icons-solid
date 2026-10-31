import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qndouacok.css';
import '../../css/r/rw-aaobza.css';
import '../../css/v/v1a8hqbko.css';
import '../../css/w/wh4xbvbwb.css';
import '../../css/u/u1273gl5p.css';
import '../../css/f/f7d-weawe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qndouacok wm-shadow"/><path class="rw-aaobza"/><path class="v1a8hqbko"/><path class="wh4xbvbwb"/><path class="u1273gl5p"/><path class="f7d-weawe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:fireplace"} {...others} />);
}

export default Component;

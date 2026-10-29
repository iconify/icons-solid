import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/g55zo3q7d.css';
import '../../css/f/fir8j1bzz.css';
import '../../css/f/frhmjub8p.css';
import '../../css/z/z0wiqj4of.css';
import '../../css/n/n95eksb1d.css';
import '../../css/l/l9qx7pb-g.css';
import '../../css/y/y5csqvbrl.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="g55zo3q7d wm-shadow"/><path class="fir8j1bzz"/><path class="frhmjub8p"/><path class="z0wiqj4of"/><path class="n95eksb1d"/><path class="l9qx7pb-g wm-shine"/><path class="wm-deco y5csqvbrl"/><path class="dz-w9_b8f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:thumbs-down"} {...others} />);
}

export default Component;

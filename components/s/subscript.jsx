import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vxznvy5gs.css';
import '../../css/r/ryi9k0mlv.css';
import '../../css/y/y3ho0mbgg.css';
import '../../css/w/w53sohfwv.css';
import '../../css/l/ljbzikb7e.css';
import '../../css/b/b0vcejw_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="vxznvy5gs wm-shadow"/><path class="ryi9k0mlv"/><path class="y3ho0mbgg"/><path class="w53sohfwv"/><path class="ljbzikb7e wm-shine"/><path class="b0vcejw_s wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:subscript"} {...others} />);
}

export default Component;

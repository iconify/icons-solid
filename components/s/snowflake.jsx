import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/bj2fzcbiw.css';
import '../../css/u/umsd1ybnz.css';
import '../../css/u/uxuzvbc5k.css';
import '../../css/f/f4zdovoex.css';
import '../../css/u/uhc4r3bpq.css';
import '../../css/u/usyb2xbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="bj2fzcbiw wm-shadow"/><path class="umsd1ybnz"/><path class="uxuzvbc5k"/><path class="f4zdovoex"/><path class="uhc4r3bpq wm-shine"/><path class="usyb2xbzn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:snowflake"} {...others} />);
}

export default Component;

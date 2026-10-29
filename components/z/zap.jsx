import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fe81bxboj.css';
import '../../css/l/l9fffcyzq.css';
import '../../css/x/x4u6-vbfr.css';
import '../../css/j/jzz3tzdzi.css';
import '../../css/v/vt74oiggv.css';
import '../../css/o/oxdchzbuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fe81bxboj wm-shadow"/><path class="l9fffcyzq"/><path class="x4u6-vbfr"/><path class="jzz3tzdzi"/><path class="vt74oiggv wm-shine"/><path class="oxdchzbuj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:zap"} {...others} />);
}

export default Component;

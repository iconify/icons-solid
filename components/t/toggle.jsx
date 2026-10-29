import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/z6-rrdbyr.css';
import '../../css/l/l6yygcc8m.css';
import '../../css/b/bohpowbtw.css';
import '../../css/l/lm-u_327w.css';
import '../../css/y/ybfli14jq.css';
import '../../css/x/x0e9q4bew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow z6-rrdbyr"/><path class="l6yygcc8m"/><path class="bohpowbtw"/><path class="lm-u_327w"/><path class="wm-shine ybfli14jq"/><path class="wm-deco x0e9q4bew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:toggle"} {...others} />);
}

export default Component;

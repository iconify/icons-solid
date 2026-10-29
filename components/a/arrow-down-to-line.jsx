import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/drmy_5tib.css';
import '../../css/r/rpqml8but.css';
import '../../css/l/lkm2aob1b.css';
import '../../css/j/j6nyc2a5g.css';
import '../../css/n/nouhnxb7k.css';
import '../../css/t/tjruv_bvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="drmy_5tib wm-shadow"/><path class="rpqml8but"/><path class="lkm2aob1b"/><path class="j6nyc2a5g"/><path class="nouhnxb7k wm-shine"/><path class="tjruv_bvz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:arrow-down-to-line"} {...others} />);
}

export default Component;

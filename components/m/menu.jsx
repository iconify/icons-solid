import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rpa10wpfb.css';
import '../../css/x/x6ap76b3i.css';
import '../../css/x/x8jf0bcbh.css';
import '../../css/p/p7e6cxenp.css';
import '../../css/f/fxzt3nbzs.css';
import '../../css/q/qef_sobyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="rpa10wpfb wm-shadow"/><path class="x6ap76b3i"/><path class="x8jf0bcbh"/><path class="p7e6cxenp"/><path class="fxzt3nbzs wm-shine"/><path class="qef_sobyj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:menu"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/n1vqr0bur.css';
import '../../css/x/x7y1u3b7k.css';
import '../../css/p/p1026os7g.css';
import '../../css/r/rflb3r8ot.css';
import '../../css/j/jy7p1l-ib.css';
import '../../css/b/bcwbu_5ly.css';
import '../../css/w/wuupyccag.css';
import '../../css/x/xa5pkknmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="n1vqr0bur wm-shadow"/><path class="x7y1u3b7k"/><path class="p1026os7g"/><path class="rflb3r8ot"/><path class="jy7p1l-ib"/><path class="bcwbu_5ly"/><path class="wuupyccag"/><path class="wm-deco xa5pkknmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:anchor"} {...others} />);
}

export default Component;

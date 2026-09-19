import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/moy9m_k7d.css';
import '../../css/g/glv0eejpa.css';
import '../../css/u/uo28wmy_e.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="moy9m_k7d"/><path class="glv0eejpa"/><path class="uo28wmy_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shopping-cart-bold"} {...others} />);
}

export default Component;

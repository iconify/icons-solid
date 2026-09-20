import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/municvskz.css';
import '../../css/p/pcsp0g05w.css';
import '../../css/c/cz234ebtm.css';
import '../../css/l/luhy-nlmi.css';
import '../../css/y/yu_vqvble.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="municvskz"/><path class="pcsp0g05w"/><path class="cz234ebtm"/><path class="luhy-nlmi"/><path class="yu_vqvble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:luggage-cart-duo"} {...others} />);
}

export default Component;

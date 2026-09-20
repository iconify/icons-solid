import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fpblvub4y.css';
import '../../css/e/eh-g229ix.css';
import '../../css/k/kzq3j1bop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fpblvub4y"/><path class="eh-g229ix"/><path class="kzq3j1bop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cart-large2-duotone"} {...others} />);
}

export default Component;

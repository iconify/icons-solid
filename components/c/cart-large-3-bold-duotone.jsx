import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tgtr_43fx.css';
import '../../css/i/izhbk9bxm.css';
import '../../css/v/v726j6nzi.css';
import '../../css/x/xzl8nu6cy.css';
import '../../css/a/a0vil8jzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tgtr_43fx"/><path class="izhbk9bxm"/><path class="v726j6nzi"/><path class="xzl8nu6cy"/><path class="a0vil8jzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-3-bold-duotone"} {...others} />);
}

export default Component;

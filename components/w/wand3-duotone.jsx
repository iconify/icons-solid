import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ybwunob9g.css';
import '../../css/y/ypxdzxgut.css';
import '../../css/d/dkj7-l0bn.css';
import '../../css/h/hsq04hcuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ybwunob9g"/><path class="ypxdzxgut"/><path class="dkj7-l0bn"/><path class="hsq04hcuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wand3-duotone"} {...others} />);
}

export default Component;

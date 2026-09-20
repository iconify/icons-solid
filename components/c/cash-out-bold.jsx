import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-uecobhp.css';
import '../../css/k/k2x2kac2g.css';
import '../../css/b/bn2pa0bzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="u-uecobhp"/><path class="k2x2kac2g"/><path class="bn2pa0bzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cash-out-bold"} {...others} />);
}

export default Component;

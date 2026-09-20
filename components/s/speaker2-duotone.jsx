import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/roky1l4ah.css';
import '../../css/q/qzxt4_bvs.css';
import '../../css/h/hwo0te9vb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="roky1l4ah"/><path class="qzxt4_bvs"/><path clip-rule="evenodd" class="hwo0te9vb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:speaker2-duotone"} {...others} />);
}

export default Component;

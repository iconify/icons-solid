import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cnm4tobcu.css';
import '../../css/d/d0kgfogdx.css';
import '../../css/h/hxiqqwbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="cnm4tobcu"/><path class="d0kgfogdx"/><path class="hxiqqwbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:eye-off-sharp-two-tone"} {...others} />);
}

export default Component;

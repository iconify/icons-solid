import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/d_pslabds.css';
import '../../css/c/cvcwjx53x.css';
import '../../css/e/ei48vjbzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="d_pslabds"/><path class="cvcwjx53x"/><path class="ei48vjbzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:brain-circuit-sharp-duotone"} {...others} />);
}

export default Component;

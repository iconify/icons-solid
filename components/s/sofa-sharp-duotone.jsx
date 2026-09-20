import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/r2jxn3bxo.css';
import '../../css/b/brroavbfx.css';
import '../../css/c/cl09nonwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="r2jxn3bxo"/><path clip-rule="evenodd" class="brroavbfx"/><path class="cl09nonwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sofa-sharp-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xd1ssyung.css';
import '../../css/x/xkcd5bbtr.css';
import '../../css/d/dprrhwbfp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="xd1ssyung"/><path class="xkcd5bbtr"/><path class="dprrhwbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:signage-pedestrian-no-crossing"} {...others} />);
}

export default Component;

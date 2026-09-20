import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/is3ab_1_x.css';
import '../../css/m/mxmb8ob8e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="is3ab_1_x"/><path class="mxmb8ob8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:campfire"} {...others} />);
}

export default Component;

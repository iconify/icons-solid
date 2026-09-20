import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ijhnr3beh.css';
import '../../css/y/y4av5nb-d.css';
import '../../css/l/l5jypmbdf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ijhnr3beh"/><path class="y4av5nb-d"/><path class="l5jypmbdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:gallery"} {...others} />);
}

export default Component;

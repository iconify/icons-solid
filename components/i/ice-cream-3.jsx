import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/expxr3b1h.css';
import '../../css/f/fofyspbsq.css';
import '../../css/i/i3dstgkth.css';
import '../../css/n/nf6xi1nyz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="expxr3b1h"/><path class="fofyspbsq"/><path class="i3dstgkth"/><path class="nf6xi1nyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ice-cream-3"} {...others} />);
}

export default Component;

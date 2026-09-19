import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pa_9qdbec.css';
import '../../css/l/lscdjjb2c.css';
import '../../css/l/lix8x_bop.css';
import '../../css/g/g5j1c6bbx.css';
import '../../css/j/jnouqxjlv.css';
import '../../css/f/ffnmybcie.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path class="pa_9qdbec"/><path class="lscdjjb2c"/><path class="lix8x_bop"/><path clip-rule="evenodd" class="g5j1c6bbx"/><path clip-rule="evenodd" class="jnouqxjlv"/><path clip-rule="evenodd" class="ffnmybcie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:letter-open"} {...others} />);
}

export default Component;

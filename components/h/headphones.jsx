import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh1v-obsc.css';
import '../../css/z/za5v8ccay.css';
import '../../css/m/myvgrmb0v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kh1v-obsc"/><path clip-rule="evenodd" class="za5v8ccay"/><path class="myvgrmb0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:headphones"} {...others} />);
}

export default Component;

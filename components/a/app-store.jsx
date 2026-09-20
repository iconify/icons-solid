import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cy0gxyb8p.css';
import '../../css/f/f25kgbllm.css';
import '../../css/x/xi89h-hcj.css';
import '../../css/f/fdhq32u2v.css';
import '../../css/w/wby7o_dot.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cy0gxyb8p"/><path class="f25kgbllm"/><path class="xi89h-hcj"/><path class="fdhq32u2v"/><path class="wby7o_dot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:app-store"} {...others} />);
}

export default Component;

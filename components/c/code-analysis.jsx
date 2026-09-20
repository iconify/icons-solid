import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nmmyqfygl.css';
import '../../css/h/hv2dvkbdj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="nmmyqfygl"/><path class="hv2dvkbdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:code-analysis"} {...others} />);
}

export default Component;

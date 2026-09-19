import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/txtwnjbdf.css';
import '../../css/z/zm17-uvzv.css';
import '../../css/p/p_196_o6j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="txtwnjbdf"/><path class="zm17-uvzv"/><path clip-rule="evenodd" class="p_196_o6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:laptop-cog"} {...others} />);
}

export default Component;

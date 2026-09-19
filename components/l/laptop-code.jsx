import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/txtwnjbdf.css';
import '../../css/z/zm17-uvzv.css';
import '../../css/b/b3e5m_1wu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="txtwnjbdf"/><path class="zm17-uvzv"/><path class="b3e5m_1wu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:laptop-code"} {...others} />);
}

export default Component;

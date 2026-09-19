import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nhlx0_frk.css';
import '../../css/b/bza97acfe.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="nhlx0_frk"/><path class="bza97acfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:virus"} {...others} />);
}

export default Component;

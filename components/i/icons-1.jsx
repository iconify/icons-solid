import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u-ivx_bfl.css';
import '../../css/y/yrrbzob7n.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="u-ivx_bfl"/><path class="yrrbzob7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:icons-1"} {...others} />);
}

export default Component;

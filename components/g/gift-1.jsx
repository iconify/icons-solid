import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pczwx_b9m.css';
import '../../css/i/ieuur3b8f.css';
import '../../css/e/e3091ubgm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="pczwx_b9m"/><path class="ieuur3b8f"/><path class="e3091ubgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gift-1"} {...others} />);
}

export default Component;

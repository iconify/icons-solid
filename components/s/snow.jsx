import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pj443b1og.css';
import '../../css/r/rqkm5wdvg.css';
import '../../css/r/r98xe4b5t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="pj443b1og"/><path class="rqkm5wdvg"/><path class="r98xe4b5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:snow"} {...others} />);
}

export default Component;

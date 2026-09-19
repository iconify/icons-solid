import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mwei4gkkt.css';
import '../../css/d/du887ss5t.css';
import '../../css/n/nr9v46bny.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="mwei4gkkt"/><path class="du887ss5t"/><path class="nr9v46bny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:binoculars-1"} {...others} />);
}

export default Component;

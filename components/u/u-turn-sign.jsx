import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gzha3o9cv.css';
import '../../css/a/anocjeqrh.css';
import '../../css/m/mewrxib2n.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="gzha3o9cv"/><path class="anocjeqrh"/><path class="mewrxib2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:u-turn-sign"} {...others} />);
}

export default Component;

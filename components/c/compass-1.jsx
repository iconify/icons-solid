import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zbmuzbcez.css';
import '../../css/h/hsp2_ccfa.css';
import '../../css/t/tljyajbkm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="zbmuzbcez"/><path class="hsp2_ccfa"/><path class="tljyajbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:compass-1"} {...others} />);
}

export default Component;

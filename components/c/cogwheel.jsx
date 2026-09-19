import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/ko6ce4blt.css';
import '../../css/w/w9xiptpes.css';
import '../../css/c/cgmljzbtv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ko6ce4blt"/><path class="w9xiptpes"/><path class="cgmljzbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cogwheel"} {...others} />);
}

export default Component;

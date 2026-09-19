import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u-rfnjbyv.css';
import '../../css/h/hoiwpvuvj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="u-rfnjbyv"/><path class="hoiwpvuvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:microphone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nk82svbmt.css';
import '../../css/o/oxq4dibvp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="nk82svbmt"/><path class="oxq4dibvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-side"} {...others} />);
}

export default Component;

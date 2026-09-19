import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/decdb8bpm.css';
import '../../css/t/thb564lbp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="decdb8bpm"/><path class="thb564lbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:clock-fast"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e4fevxwec.css';
import '../../css/i/iq5e8furx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="e4fevxwec"/><path class="iq5e8furx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:lock-open"} {...others} />);
}

export default Component;

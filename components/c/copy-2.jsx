import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/feoh_2q9b.css';
import '../../css/o/owtxs5hhl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="feoh_2q9b"/><path class="owtxs5hhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:copy-2"} {...others} />);
}

export default Component;

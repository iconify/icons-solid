import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uip3a__3o.css';
import '../../css/o/om213_p6b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="uip3a__3o"/><path class="om213_p6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:note-clipboard"} {...others} />);
}

export default Component;

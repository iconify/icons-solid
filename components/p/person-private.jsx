import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c3sylcoix.css';
import '../../css/j/j_3wd0b1j.css';
import '../../css/h/h2i0_xbnm.css';
import '../../css/m/m___80v3o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="c3sylcoix"/><path class="j_3wd0b1j"/><path class="h2i0_xbnm"/><path class="m___80v3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:person-private"} {...others} />);
}

export default Component;

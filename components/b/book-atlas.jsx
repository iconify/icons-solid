import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/aq31iu2el.css';
import '../../css/i/ifr_y32zs.css';
import '../../css/c/cjgizhsau.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="aq31iu2el"/><path class="ifr_y32zs"/><path class="cjgizhsau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:book-atlas"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctmlb8_7m.css';
import '../../css/c/cd00vabay.css';
import '../../css/h/hl1t43cng.css';
import '../../css/i/i6p_zx0xf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ctmlb8_7m"><path class="cd00vabay"/><path class="hl1t43cng"/><path class="i6p_zx0xf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sparkles-1"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/emi0eccik.css';
import '../../css/c/c_jf4kbfk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="emi0eccik"/><path class="c_jf4kbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:g"} {...others} />);
}

export default Component;

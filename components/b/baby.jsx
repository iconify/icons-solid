import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/azm5fdbvj.css';
import '../../css/j/joiookbjd.css';
import '../../css/m/mzlwi6b_o.css';
import '../../css/a/aike50ajx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="azm5fdbvj"/><path class="joiookbjd"/><path class="mzlwi6b_o"/><path class="aike50ajx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:baby"} {...others} />);
}

export default Component;

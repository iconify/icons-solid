import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g_yrw5t-e.css';
import '../../css/l/l_mse-bsg.css';
import '../../css/d/dkc_tb-ko.css';
import '../../css/r/r1nix1b9b.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="g_yrw5t-e"/><path class="l_mse-bsg"/><path class="dkc_tb-ko"/><path class="r1nix1b9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rocket-outline"} {...others} />);
}

export default Component;

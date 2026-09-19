import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sya77cctx.css';
import '../../css/h/hrqd55bed.css';
import '../../css/m/mnxlbl_dl.css';
import '../../css/y/yrp2k7bbm.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="sya77cctx"/><path class="hrqd55bed"/><path class="mnxlbl_dl"/><path class="yrp2k7bbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:burn-outline"} {...others} />);
}

export default Component;

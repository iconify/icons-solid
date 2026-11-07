import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwoc91b1n.css';
import '../../css/x/x7s65d18e.css';
import '../../css/d/diir2xbcn.css';
import '../../css/f/fvwno1beg.css';
import '../../css/z/zepddnbmb.css';
import '../../css/d/drez-oxbk.css';
import '../../css/n/nbozb93jk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zwoc91b1n"/><path clip-rule="evenodd" class="x7s65d18e"/><path class="diir2xbcn"/><path class="fvwno1beg"/><path class="zepddnbmb"/><path class="drez-oxbk"/><path clip-rule="evenodd" class="nbozb93jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-square-2-outline"} {...others} />);
}

export default Component;

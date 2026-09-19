import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pm6orv45l.css';
import '../../css/w/wpycjcc8p.css';
import '../../css/f/fs1i-xbzv.css';
import '../../css/q/qj9lcp8az.css';
import '../../css/b/b4_iq75ad.css';
import '../../css/y/ymd90j6dp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pm6orv45l"/><path clip-rule="evenodd" class="wpycjcc8p"/><rect class="fs1i-xbzv"/><path clip-rule="evenodd" class="qj9lcp8az"/><rect class="b4_iq75ad"/><path class="ymd90j6dp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:robot"} {...others} />);
}

export default Component;

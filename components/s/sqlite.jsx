import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6s4gpb0s.css';
import '../../css/s/sp8j_vbuq.css';
import '../../css/q/qw5dmrbmi.css';
import '../../css/l/lnn-412sw.css';
import '../../css/k/khby8rbez.css';
import '../../css/p/px9k_ucyq.css';

const viewBox = {"width":512,"height":228};
const content = `<defs><linearGradient id="SVGn792ud6l" x1="57.7%" x2="57.7%" y1="2%" y2="94.4%"><stop offset="0%" class="y6s4gpb0s"/><stop offset="92%" class="sp8j_vbuq"/><stop offset="100%" class="sp8j_vbuq"/></linearGradient></defs><path class="qw5dmrbmi"/><path class="lnn-412sw"/><path fill="url(#SVGn792ud6l)" class="khby8rbez"/><path class="px9k_ucyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sqlite"} {...others} />);
}

export default Component;

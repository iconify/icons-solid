import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ad_0h3wjz.css';
import '../../css/l/lqldgywfo.css';
import '../../css/y/yogfn1_7i.css';
import '../../css/l/ltkgk-xdn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ad_0h3wjz"/><path clip-rule="evenodd" class="lqldgywfo"/><path class="yogfn1_7i"/><path clip-rule="evenodd" class="ltkgk-xdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mobile-outline"} {...others} />);
}

export default Component;

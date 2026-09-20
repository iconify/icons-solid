import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/n/ne5iqibmo.css';
import '../../css/r/rgh6_kbiy.css';
import '../../css/w/w4lrmqbtx.css';
import '../../css/w/w8bi86fvu.css';
import '../../css/w/w2ldzvbmm.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="ne5iqibmo"/><path class="rgh6_kbiy"/><path class="w4lrmqbtx"/><path class="w8bi86fvu"/><path class="w2ldzvbmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:keyboard-direction"} {...others} />);
}

export default Component;

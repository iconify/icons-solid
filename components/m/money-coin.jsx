import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r7rqnwbta.css';
import '../../css/v/v6kt4fg5s.css';
import '../../css/k/k66ktvbgt.css';
import '../../css/c/ch0cg4b6c.css';
import '../../css/e/ei7j91p7d.css';
import '../../css/s/su1ibgwgx.css';
import '../../css/i/i088pknor.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(1)" class="n1lsf0bnc"><ellipse class="r7rqnwbta"/><path class="v6kt4fg5s"/><path class="k66ktvbgt"/><ellipse class="ch0cg4b6c"/><path class="ei7j91p7d"/><path class="su1ibgwgx"/><path class="i088pknor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:money-coin"} {...others} />);
}

export default Component;

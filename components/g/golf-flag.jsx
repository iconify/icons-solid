import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/llw_un2tp.css';
import '../../css/f/fa4lbbc7g.css';
import '../../css/w/w1me6ibgx.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(1)" class="n1lsf0bnc"><ellipse class="llw_un2tp"/><path class="fa4lbbc7g"/><circle class="w1me6ibgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:golf-flag"} {...others} />);
}

export default Component;

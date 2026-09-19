import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d_ieg7u_u.css';
import '../../css/p/pmlng5ayj.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="d_ieg7u_u"/><path class="pmlng5ayj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:button-buy"} {...others} />);
}

export default Component;

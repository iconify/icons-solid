import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vo03lkbbh.css';
import '../../css/j/jbw52u0nv.css';

const viewBox = {"width":16,"height":16};
const content = `<g transform="translate(4)" class="n1lsf0bnc"><ellipse class="vo03lkbbh"/><path class="jbw52u0nv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:info"} {...others} />);
}

export default Component;

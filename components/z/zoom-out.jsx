import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u4u-atzby.css';
import '../../css/w/wg70lcbzp.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="u4u-atzby"/><path class="wg70lcbzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:zoom-out"} {...others} />);
}

export default Component;

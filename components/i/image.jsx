import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/chw1slugz.css';
import '../../css/w/wxo5dv6kc.css';
import '../../css/l/lm05hxbgz.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(0 2)" class="n1lsf0bnc"><path class="chw1slugz"/><ellipse class="wxo5dv6kc"/><path class="lm05hxbgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:image"} {...others} />);
}

export default Component;

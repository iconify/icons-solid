import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v4dco01cl.css';
import '../../css/y/yhr0z_-za.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="v4dco01cl"/><path class="yhr0z_-za"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:chart-decrease"} {...others} />);
}

export default Component;

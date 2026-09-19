import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j07se6udc.css';
import '../../css/d/dr15u0bie.css';
import '../../css/v/vqlwd60yd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="j07se6udc"/><path class="dr15u0bie"/><path class="vqlwd60yd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:camp-duo"} {...others} />);
}

export default Component;

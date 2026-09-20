import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i8hq46b4m.css';
import '../../css/j/j4wwmxbht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="i8hq46b4m"/><path class="j4wwmxbht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:user-sharp-two-tone"} {...others} />);
}

export default Component;

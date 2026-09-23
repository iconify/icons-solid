import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vhj6biypl.css';
import '../../css/l/l9gqw4bde.css';
import '../../css/t/t-fa8-bok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="vhj6biypl"/><path class="l9gqw4bde"/><path class="t-fa8-bok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shirt-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t5_43f5jw.css';
import '../../css/j/j8itey4it.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="t5_43f5jw"/><path class="j8itey4it"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scissors-horizontal-sharp-two-tone"} {...others} />);
}

export default Component;

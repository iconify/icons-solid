import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qz2ibpbaq.css';
import '../../css/w/wy4wumbry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="qz2ibpbaq"/><path class="wy4wumbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:moon-sharp-two-tone"} {...others} />);
}

export default Component;

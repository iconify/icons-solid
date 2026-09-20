import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/f8u2w-9tv.css';
import '../../css/q/q5pxg1pze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="f8u2w-9tv"/><path class="q5pxg1pze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:power-sharp-duotone"} {...others} />);
}

export default Component;

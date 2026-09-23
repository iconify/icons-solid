import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/od9q1ob6d.css';
import '../../css/f/flz8mqbuo.css';
import '../../css/u/uuef9bbcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="od9q1ob6d"/><path class="flz8mqbuo"/><path class="uuef9bbcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:camera-sparkles-sharp-duotone"} {...others} />);
}

export default Component;

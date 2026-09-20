import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rc9k93_4z.css';
import '../../css/u/uly0edb1d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="rc9k93_4z"/><path class="uly0edb1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:home-sharp-duotone"} {...others} />);
}

export default Component;

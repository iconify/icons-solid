import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jus-9cble.css';
import '../../css/r/r0fzdm12c.css';
import '../../css/l/l18eabbfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="jus-9cble"/><path class="r0fzdm12c"/><path class="l18eabbfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:volume-off-sharp-two-tone"} {...others} />);
}

export default Component;

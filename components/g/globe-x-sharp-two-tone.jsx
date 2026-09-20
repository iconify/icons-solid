import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/urdyx_lzo.css';
import '../../css/a/a511xccma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="urdyx_lzo"/><path class="a511xccma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:globe-x-sharp-two-tone"} {...others} />);
}

export default Component;

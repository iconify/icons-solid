import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dj04zfbhi.css';
import '../../css/j/j8doxx_bn.css';
import '../../css/i/i645x0uvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="dj04zfbhi"/><path class="j8doxx_bn"/><path class="i645x0uvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calculator-sparkles-sharp-duotone"} {...others} />);
}

export default Component;

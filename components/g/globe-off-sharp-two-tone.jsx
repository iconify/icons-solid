import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j5as4w8rp.css';
import '../../css/q/qnba0sb7c.css';
import '../../css/z/zvs88eytg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="j5as4w8rp"/><path class="qnba0sb7c"/><path class="zvs88eytg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:globe-off-sharp-two-tone"} {...others} />);
}

export default Component;

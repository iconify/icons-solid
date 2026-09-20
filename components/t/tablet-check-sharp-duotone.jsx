import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e-veehbyi.css';
import '../../css/w/wijtr1amn.css';
import '../../css/h/h1a-_zb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="e-veehbyi"/><path class="wijtr1amn"/><path class="h1a-_zb3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tablet-check-sharp-duotone"} {...others} />);
}

export default Component;

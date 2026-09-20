import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e-veehbyi.css';
import '../../css/l/ljmljcb1t.css';
import '../../css/h/h1a-_zb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="e-veehbyi"/><path class="ljmljcb1t"/><path class="h1a-_zb3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tablet-arrow-in-up-sharp-two-tone"} {...others} />);
}

export default Component;

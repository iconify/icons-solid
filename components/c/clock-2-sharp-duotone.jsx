import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e9ewmybae.css';
import '../../css/w/w1yfq4b5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="e9ewmybae"/><path class="w1yfq4b5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clock-2-sharp-duotone"} {...others} />);
}

export default Component;

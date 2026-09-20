import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l0l0nyx_c.css';
import '../../css/d/d7kt-8ipq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="l0l0nyx_c"/><path class="d7kt-8ipq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sticky-notes-sharp-two-tone"} {...others} />);
}

export default Component;

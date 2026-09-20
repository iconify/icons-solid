import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vfpcfvbpw.css';
import '../../css/r/r0b537ytf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="vfpcfvbpw"/><path class="r0b537ytf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-squares-sharp-two-tone"} {...others} />);
}

export default Component;

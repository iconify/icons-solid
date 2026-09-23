import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e6okltb-a.css';
import '../../css/s/snibgdcaa.css';
import '../../css/i/istp_fbqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="e6okltb-a"/><path class="snibgdcaa"/><path class="istp_fbqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mic-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;

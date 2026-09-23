import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xuavuhbkk.css';
import '../../css/l/lxr-c948j.css';
import '../../css/f/fumgbtb-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xuavuhbkk"/><path class="lxr-c948j"/><path class="fumgbtb-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:inbox-sparkles-two-tone"} {...others} />);
}

export default Component;

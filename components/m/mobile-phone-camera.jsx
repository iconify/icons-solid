import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/viq046pjc.css';
import '../../css/q/q8frx3byj.css';
import '../../css/l/ltt51rbav.css';
import '../../css/c/cxdej94kx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="viq046pjc"/><path class="q8frx3byj"/><path class="ltt51rbav"/><path class="cxdej94kx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:mobile-phone-camera"} {...others} />);
}

export default Component;

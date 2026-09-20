import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uc-a9xb9c.css';
import '../../css/u/ut1_a7brm.css';
import '../../css/t/tj1d63zoc.css';
import '../../css/e/e8s3j_o1h.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="uc-a9xb9c"/><path class="ut1_a7brm"/><path class="tj1d63zoc"/><path class="e8s3j_o1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:camera-video"} {...others} />);
}

export default Component;

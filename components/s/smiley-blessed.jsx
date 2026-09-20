import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/malduobwn.css';
import '../../css/y/yp1d_0bvl.css';
import '../../css/z/zkpulid_q.css';
import '../../css/t/tw1voem7q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="malduobwn"/><path class="yp1d_0bvl"/><path class="zkpulid_q"/><path class="tw1voem7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:smiley-blessed"} {...others} />);
}

export default Component;

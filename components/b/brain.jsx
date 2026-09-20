import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/os6dis-ui.css';
import '../../css/y/y2kpw3b2j.css';
import '../../css/a/a41-5ibct.css';
import '../../css/c/cw2k_fbcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="os6dis-ui"/><path class="y2kpw3b2j"/><path class="a41-5ibct"/><path class="cw2k_fbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:brain"} {...others} />);
}

export default Component;
